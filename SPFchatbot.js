const chatLog = document.getElementById('chat-log');

// Function to scroll to the bottom of the chat log
function scrollToBottom() {
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Example of adding a new message (you can trigger this function when a new message is sent)
function addMessage(messageContent, isUser = false) {
  const message = document.createElement('div');
  message.classList.add('message');
  if (isUser) {
    message.classList.add('user');
  } else {
    message.classList.add('bot');
  }

  message.textContent = messageContent;
  chatLog.appendChild(message);
  
  // Scroll to the bottom after adding the new message
  scrollToBottom();
}

// Add a test message for demonstration
addMessage("Hello! How can I assist you?", false);
addMessage("I need help with my account.", true);

// Scroll to bottom on page load if needed
scrollToBottom();
