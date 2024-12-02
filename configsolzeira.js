const video = document.getElementById('myvideo');
const startButton = document.getElementById('start-btn');
const viewerLink = document.getElementById('viewer-link');

// Configurações do WebRTC
const peerConnections = {};
const config = {
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

// Conecta ao servidor WebSocket
const socket = io("https://index-htm-6c6r.vercel.app");

// Inicia a câmera e compartilha o vídeo
startButton.addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

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

    // Gera o link para os espectadores
    const link = `${window.location.origin}/viewer.html`;
    viewerLink.value = link;
});
