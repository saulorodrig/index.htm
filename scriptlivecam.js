const video = document.getElementById('myvideo');
const myBtn = document.getElementById('mybtn');
const chatArea = document.getElementById('chat-area');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const emojiBtn = document.getElementById('emoji-btn');
const presentBtn = document.getElementById('present-btn');

myBtn.addEventListener('click', () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Seu navegador não suporta este recurso.');
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
            myBtn.style.display = 'none';
        })
        .catch((error) => {
            console.error('Erro ao acessar a webcam:', error);
            alert('Não foi possível acessar a câmera.');
        });
});

sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatArea.appendChild(messageElement);
        chatInput.value = '';
        chatArea.scrollTop = chatArea.scrollHeight; // Rola para a última mensagem
    }
});

emojiBtn.addEventListener('click', () => {
    chatInput.value += '😊'; // Adiciona emoji no campo de texto
    chatInput.focus();
});

presentBtn.addEventListener('click', () => {
    const presentMessage = document.createElement('div');
    presentMessage.textContent = '🎁 Alguém enviou um presente!';
    presentMessage.style.color = 'gold';
    chatArea.appendChild(presentMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
});