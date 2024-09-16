document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
  
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = messageInput.value.trim();
      if (messageText) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<p><strong>You:</strong> ${messageText}</p>`;
        chatBox.appendChild(messageDiv);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
      }
    });
  });
  