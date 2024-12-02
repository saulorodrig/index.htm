const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

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

server.listen(3000, () => console.log('Servidor rodando na porta 3000'));
