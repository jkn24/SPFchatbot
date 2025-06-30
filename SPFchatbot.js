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

  // Structured data with HTML formatting for "Looking for funding" and "Question about available funding"
  const structuredResponse = `
    <div class="bot-message">
      <h2>SPF Office of Research Development</h2>
      <hr />
      
      <img src="https://assets.isu.pub/document-structure/241104125135-a0dd721d1124a555952246b0575997fe/v1/9c58632e3439ab68a04f6311889b5765.jpeg" alt="Research Staff Banner" style="width: 100%; height: auto; margin-bottom: 20px;" />
      
      <p>The Research and Development (RD) office at Cal Poly Humboldt is dedicated to supporting faculty, staff, and students in securing research funding and advancing innovative projects. By offering resources like curated funding opportunities, training on platforms such as Pivot, and personalized support for grant proposals, the office helps turn research ideas into reality. It also fosters collaboration across departments and organizes workshops, networking events, and internal funding competitions. Through its comprehensive services and outreach efforts, the RD office plays a key role in driving the university's research initiatives and connecting the campus community with valuable funding resources.</p>
      <a href="https://www.humboldt.edu/research/award-lifecycle/funding-proposal-support" target="_blank" class="learn-more-btn">Learn More</a>

      <h3>Meet Our Team</h3>
      <div class="person-card">
        <h3>Erika Wright, Research Development Lead</h3>
        <p>✉ <a href="mailto:erika.wright@humboldt.edu">erika.wright@humboldt.edu</a></p>
      </div>

      <div class="person-card">
        <h3>Cara Peters, Research Development Marketing and Support Coordinator</h3>
        <p>✉ <a href="mailto:cara.peters@humboldt.edu">cara.peters@humboldt.edu</a></p>
      </div>

      <div class="person-card">
        <h3>Kumiye "Kumi" Nakadate, Research Development Support Coordinator</h3>
        <p>✉ <a href="mailto:kumiye.nakadate@humboldt.edu">kumiye.nakadate@humboldt.edu</a></p>
      </div>
    </div>
  `;

  // The "What is SPF?" message
  const spfInfoMessage = `
    <div class="bot-message">
      <h2>What is SPF?</h2>
      <p>The Sponsored Programs Foundation (SPF) at Cal Poly Humboldt is dedicated to supporting the university's research, grant, and contract initiatives. SPF helps faculty, staff, and students navigate the complexities of securing funding for innovative projects by providing resources, expertise, and personalized assistance. With a focus on fostering collaboration and advancing research, SPF plays a pivotal role in turning ideas into impactful solutions for the campus community and beyond.</p>
    </div>
  `;

  // Handle option button clicks
  document.querySelectorAll('.option-btn').forEach(button => {
    button.addEventListener('click', () => {
      const userText = button.textContent.trim();  // Ensure we match the key correctly
      addMessage(userText, true);  // Add user message

      if (userText === "What is SPF?") {
        setTimeout(() => {
          addMessage(spfInfoMessage, false);  // Show SPF info
        }, 400);  // Delay before showing SPF info

      } else if (userText === "Looking for pivot training" || userText === "Looking for funding" || userText === "Question about available funding") {
        // Show different intro for each of the funding-related options, and then show the structured response
        const introMessage = (userText === "Looking for funding") 
          ? "Here are some offices and individuals that will be able to help you with discussing and finding funding opportunities:"
          : (userText === "Question about available funding")
            ? "Here are some offices and individuals that will be able to help you with all your questions regarding funding:"
            : "Here are some offices and individuals that will be able to help you with training with Pivot.";
        
        setTimeout(() => {
          addMessage(introMessage, false);  // Display the respective intro message

          setTimeout(() => {
            addMessage(structuredResponse, false);  // Display structured message after a delay
          }, 500);  // Small delay before showing the structured response
        }, 400);  // Delay before showing the intro message

      } else if (userText === "Other—please refer me to a person.") {
        setTimeout(() => {
          // Display message for the "Other" option
          addMessage("Here are some individuals that will be able to assist you further:", false);

          setTimeout(() => {
            addMessage(structuredResponse, false);  // List of people from the "Looking for pivot training"
          }, 500);  // Small delay before showing the people cards
        }, 400);
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
