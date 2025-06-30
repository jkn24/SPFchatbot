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
    message.innerHTML = messageContent;  // Inject HTML content
    chatLog.appendChild(message);
    scrollToBottom();
  }

  // Structured data with HTML formatting
  const structuredResponse = `
    <div class="bot-message">
      <img src="https://www.humboldt.edu/research/about/our-staff" alt="Research Staff Banner" style="width: 100%; height: auto; margin-bottom: 20px;" />

      <h2>SPF Office of Research Development</h2>
      <hr style="border-top: 2px solid #ccc; margin-bottom: 20px;" />
      <p>The Research and Development (RD) office at Cal Poly Humboldt is dedicated to supporting faculty, staff, and students in securing research funding and advancing innovative projects. By offering resources like curated funding opportunities, training on platforms such as Pivot, and personalized support for grant proposals, the office helps turn research ideas into reality. It also fosters collaboration across departments and organizes workshops, networking events, and internal funding competitions. Through its comprehensive services and outreach efforts, the RD office plays a key role in driving the university's research initiatives and connecting the campus community with valuable funding resources.</p>
      <a href="https://www.humboldt.edu/research/award-lifecycle/funding-proposal-support" target="_blank" style="display: inline-block; padding: 10px 20px; background-color: #0077b6; color: white; text-decoration: none; border-radius: 5px; margin-bottom: 20px;">Learn More</a>

      <h3>Meet Our Team</h3>
      <div class="person-card">
        <h3> Erika Wright, Research Development Lead</h3>
        <p>✉ <a href="mailto:erika.wright@humboldt.edu">erika.wright@humboldt.edu</a></p>
      </div>

      <div class="person-card">
        <h3> Cara Peters, Research Development Marketing and Support Coordinator</h3>
        <p>✉ <a href="mailto:cara.peters@humboldt.edu">cara.peters@humboldt.edu</a></p>
      </div>

      <div class="person-card">
        <h3> Kumiye "Kumi" Nakadate, Research Development Support Coordinator</h3>
        <p>✉ <a href="mailto:kumiye.nakadate@humboldt.edu">kumiye.nakadate@humboldt.edu</a></p>
      </div>
    </div>
  `;

  // Handle option button clicks
  document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
      const userText = button.textContent.trim();  // Ensure we match the key correctly
      addMessage(userText, true);  // Add user message

      if (userText === "Looking for pivot training") {
        setTimeout(() => {
          addMessage(structuredResponse, false);  // Add the structured message with info and team
        }, 400);  // small delay to simulate response
      } else {
        setTimeout(() => {
          addMessage("I'm not sure how to respond to that.", false);
        }, 400);
      }
    });
  });

  // Optional: Scroll to bottom on load
  scrollToBottom();
});
