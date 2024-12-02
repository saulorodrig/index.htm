import { Server } from "socket.io";
import http from "http";
import express from "express";

// Configuração do servidor Express
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve arquivos estáticos (se necessário)
app.use(express.static("public"));

// Ao conectar um cliente
io.on("connection", (socket) => {
    console.log("Usuário conectado");

    // O host está pronto para transmitir
    socket.on('host-ready', (roomID) => {
        socket.join(roomID); // O host entra na sala
        socket.broadcast.to(roomID).emit('watcher', socket.id); // Informa os espectadores sobre o host
    });

    // O espectador quer se conectar
    socket.on('watcher', (roomID) => {
        socket.join(roomID); // O espectador entra na sala
    });

    // Oferta de vídeo
    socket.on('offer', (id, description) => {
        io.to(id).emit('offer', socket.id, description); // Envia a oferta para o espectador
    });

    // Resposta da conexão WebRTC
    socket.on('answer', (id, description) => {
        io.to(id).emit('answer', socket.id, description); // Envia a resposta do espectador para o host
    });

    // Candidatos ICE
    socket.on('candidate', (id, candidate) => {
        io.to(id).emit('candidate', socket.id, candidate); // Envia candidato para o espectador
    });

    // Desconexão de um usuário
    socket.on('disconnect', () => {
        console.log("Usuário desconectado");
    });
});

// Inicializa o servidor WebSocket
server.listen(3000, () => {
    console.log('Servidor WebSocket rodando na porta 3000');
});
