
  const chatButton = document.getElementById('chatButton');
  const chatPopup = document.getElementById('chatPopup');
  const closeChat = document.getElementById('closeChat');

  chatButton.addEventListener('click', () => {
    chatPopup.style.display = 'flex';
    chatButton.style.display = 'none';
  });

  closeChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
    chatButton.style.display = 'block';
  });

