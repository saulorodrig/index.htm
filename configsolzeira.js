document.getElementById('start-btn').addEventListener('click', () => {
    // Acessa a câmera do usuário
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            const video = document.getElementById('myvideo');
            video.srcObject = stream; // Exibe o vídeo da câmera na página

            // Gerar um link único para o espectador
            const viewerLink = window.location.href + "viewer?room=" + generateRoomID();
            
            // Exibe o link para os espectadores e estiliza-o em azul
            const viewerLinkInput = document.getElementById('viewer-link');
            viewerLinkInput.value = viewerLink; // Define o valor do input com o link
            
            // Estiliza o link em azul
            viewerLinkInput.style.color = "blue"; // Altera a cor do texto para azul
            viewerLinkInput.style.border = "1px solid blue"; // Coloca uma borda azul

            // Envia o vídeo para os espectadores
            socket.emit('host-ready');

            // Adiciona o stream aos novos peers que se conectarem
            socket.on('watcher', id => {
                const peerConnection = new RTCPeerConnection(config);
                peerConnections[id] = peerConnection;

                stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

                peerConnection.onicecandidate = event => {
                    if (event.candidate) {
                        socket.emit('candidate', id, event.candidate);
                    }
                };

                peerConnection
                    .createOffer()
                    .then(sdp => peerConnection.setLocalDescription(sdp))
                    .then(() => socket.emit('offer', id, peerConnection.localDescription));
            });

            socket.on('candidate', (id, candidate) => {
                peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
            });

            socket.on('disconnectPeer', id => {
                peerConnections[id] && peerConnections[id].close();
                delete peerConnections[id];
            });
        })
        .catch((error) => {
            console.error('Erro ao acessar a câmera: ', error);
            alert('Não foi possível acessar a câmera.');
        });
});

// Função para gerar um ID único para a sala de transmissão
function generateRoomID() {
    return Math.random().toString(36).substr(2, 9); // Gera um ID aleatório
}

// Configurações do WebRTC
const peerConnections = {};
const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

// Conecta ao servidor WebSocket
const socket = io("https://index-htm-6c6r.vercel.app");
