/**
 * Attaches a submit event listener to a form to simulate a submission.
 * @param {string} formId - The ID of the form element.
 * @param {string} formName - A descriptive name for the form for logging.
 */
function handleFormSubmit(formId, formName) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(`${formName} submitted:`, data);
      alert(`${formName} submitted successfully! (Check console)`);
      form.reset();
    });
  }
}

/**
 * Initializes all form handlers.
 */
function initFormHandlers() {
  handleFormSubmit('signup-form', 'Sign Up Form');
  handleFormSubmit('onboarding-form', 'Onboarding Form');
  handleFormSubmit('create-post-form', 'Create Post Form');
  handleFormSubmit('settings-form', 'Settings Form');
}

/**
 * Initializes the messaging simulation UI.
 */
function initMessaging() {
  const messageInput = document.getElementById('message-input');
  const messageSendBtn = document.getElementById('message-send-btn');
  const messageArea = document.getElementById('message-area');

  if (!messageInput || !messageSendBtn || !messageArea) return;

  const sendMessage = () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
      const messageEl = document.createElement('div');
      messageEl.className = 'flex justify-end';
      messageEl.innerHTML = `<div class="bg-theme-accent text-white p-3 rounded-lg max-w-lg">${messageText}</div>`;
      messageArea.appendChild(messageEl);
      messageInput.value = '';
      messageArea.scrollTop = messageArea.scrollHeight;
    }
  };

  messageSendBtn.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });
}

/**
 * Initializes the RSVP button simulation.
 */
function initRsvpButton() {
  const rsvpBtn = document.querySelector('.rsvp-btn');
  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', () => {
      rsvpBtn.textContent = "✓ RSVP'd";
      rsvpBtn.disabled = true;
    }, { once: true });
  }
}

/**
 * Initializes handlers for any non-implemented feature links.
 */
function initDeadLinks() {
    const deadLinks = document.querySelectorAll('a[href="#"]');
    deadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This feature is not yet implemented.");
        });
    });
}

/**
 * Initializes all UI components and event listeners.
 * This should be called once the DOM is ready.
 */
export function initUI() {
  initFormHandlers();
  initMessaging();
  initRsvpButton();
  initDeadLinks();
}
