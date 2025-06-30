document.addEventListener('DOMContentLoaded', () => {
  const chatLog = document.getElementById('chat-log');

  // Function to scroll to the bottom of the chat log
  function scrollToBottom() {
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  // Function to add a message to the chat log
  function addMessage(messageContent, isUser = false) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(isUser ? 'user' : 'bot');
    message.innerHTML = messageContent;
    chatLog.appendChild(message);
    scrollToBottom();
  }

  // Responses with links and enhanced descriptions
  const responses = {
    "What is SPF?": "The Cal Poly Humboldt Sponsored Programs Foundation (SPF) is a nonprofit auxiliary organization that manages externally funded grants and contracts for the university. Established to support research and creative activities, SPF works closely with faculty, staff, and students to submit proposals, administer awards, and ensure compliance with funding agency requirements. Its mission is to advance the university’s academic goals by supporting sponsored research and scholarly activities. Learn more at <a href='https://www.humboldt.edu/research' target='_blank'>humboldt.edu/research</a>.",
    
    "Looking for funding": "Looking for funding doesn't have to be difficult or intimidating. SPF's professionals are here to make it easier! We can conduct searches for possible funding opportunities on your behalf. Please contact someone in our Research Development office: <a href='https://www.humboldt.edu/research/about/our-staff' target='_blank'>Erika Wright or Cara Peters</a>.<br><br>Additionally, here are some funding search resources from Cal Poly Humboldt's Sponsored Program Foundation: <a href='https://www.humboldt.edu/research/award-lifecycle/funding-proposal-support/find-funding' target='_blank'>Find Funding</a>.",
    
    "Question about available funding": "Here is the contact information for individuals who can assist you with your funding questions: <a href='https://www.humboldt.edu/research/about/our-staff' target='_blank'>Erika Wright or Cara Peters</a>.",
    
    "Looking for pivot training": "Here is the contact information for individuals who can assist you with being trained on Pivot: <a href='https://www.humboldt.edu/research/about/our-staff' target='_blank'>Erika Wright or Cara Peters</a>.",
    
    "Other—please refer me to a person.": "Here is the contact information for individuals working in the Office of Research Development with Cal Poly Humboldt's Sponsored Program Foundation: <a href='https://www.humboldt.edu/research/about/our-staff' target='_blank'>Erika Wright or Cara Peters</a>"
  };

  // Handle option button clicks
  document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
      const userText = button.textContent;
      addMessage(userText, true);

      const botResponse = responses[userText] || "I'm not sure how to respond to that.";
      setTimeout(() => {
        addMessage(botResponse, false);
      }, 400); // small delay to simulate response
    });
  });

  // Optional: Scroll to bottom on load
  scrollToBottom();
});
