import { Server } from 'socket.io';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).send('Servidor de WebSocket está ativo');
    } else {
        res.status(405).send('Método não permitido');
    }
}

// Crie o WebSocket Server na Vercel
export function startSocketServer() {
    const io = new Server();

    io.on('connection', socket => {
        socket.on('host-ready', () => {
            socket.broadcast.emit('host-ready');
        });

        socket.on('offer', (id, description) => {
            io.to(id).emit('offer', socket.id, description);
        });

        socket.on('answer', (id, description) => {
            io.to(id).emit('answer', socket.id, description);
        });

        socket.on('candidate', (id, candidate) => {
            io.to(id).emit('candidate', socket.id, candidate);
        });

        socket.on('watcher', () => {
            socket.broadcast.emit('watcher', socket.id);
        });

        socket.on('disconnect', () => {
            socket.broadcast.emit('disconnectPeer', socket.id);
        });
    });

    return io;
}
