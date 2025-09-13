document.addEventListener('DOMContentLoaded', () => {
    /**
     * ------------------------------------------------------------------------
     * THEME TOGGLE
     * ------------------------------------------------------------------------
     * Handles switching the color theme of the site.
     * The 'hookups-theme' class is added or removed from the body element,
     * which triggers the CSS variable changes for the dark theme.
     */
    const hookupsModeBtn = document.getElementById('hookups-mode');
    const communityModeBtn = document.getElementById('community-mode');
    const bothModesBtn = document.getElementById('both-modes');
    const body = document.body;

    // Function to apply the theme based on localStorage
    const applyTheme = () => {
        if (localStorage.getItem('theme') === 'hookups') {
            body.classList.add('hookups-theme');
        } else {
            body.classList.remove('hookups-theme');
        }
    };

    // Apply theme on initial page load
    applyTheme();

    if (hookupsModeBtn) {
        hookupsModeBtn.addEventListener('click', () => {
            localStorage.setItem('theme', 'hookups');
            applyTheme();
        });
    }
    if (communityModeBtn) {
        communityModeBtn.addEventListener('click', () => {
            localStorage.removeItem('theme');
            applyTheme();
        });
    }
    if (bothModesBtn) {
        bothModesBtn.addEventListener('click', () => {
            localStorage.removeItem('theme');
            applyTheme();
        });
    }

    console.log("Limpopo Connect script loaded.");

    /**
     * ------------------------------------------------------------------------
     * FORM SUBMISSION SIMULATION
     * ------------------------------------------------------------------------
     * A generic handler for all form submissions on the site.
     * It prevents the default form submission, gathers the form data,
     * logs it to the console, and shows an alert.
     * This is a placeholder for future API integration.
     * @param {string} formId - The ID of the form element.
     * @param {string} formName - A descriptive name for the form for logging purposes.
     */
    const handleFormSubmit = (formId, formName) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                console.log(`${formName} submitted:`, data);
                alert(`${formName} submitted successfully! (Check the console for data)`);
                form.reset();
            });
        }
    };

    handleFormSubmit('signup-form', 'Sign Up Form');
    handleFormSubmit('onboarding-form', 'Onboarding Form');
    handleFormSubmit('create-post-form', 'Create Post Form');
    handleFormSubmit('settings-form', 'Settings Form');

    // --- Messaging Simulation ---
    const messageInput = document.querySelector('.message-input input');
    const messageSendBtn = document.querySelector('.message-input button');
    const messageArea = document.querySelector('.message-area');

    if (messageInput && messageSendBtn && messageArea) {
        messageSendBtn.addEventListener('click', () => {
            const messageText = messageInput.value.trim();
            if (messageText) {
                const messageEl = document.createElement('div');
                messageEl.classList.add('message', 'sent');
                messageEl.innerHTML = `<p>${messageText}</p>`;
                messageArea.appendChild(messageEl);
                messageInput.value = '';
                messageArea.scrollTop = messageArea.scrollHeight; // Scroll to bottom
            }
        });
    }

    // --- RSVP Simulation ---
    const rsvpBtn = document.querySelector('.rsvp-btn');
    if (rsvpBtn) {
        rsvpBtn.addEventListener('click', () => {
            rsvpBtn.textContent = "✓ RSVP'd";
            rsvpBtn.disabled = true;
            console.log('User RSVPd to event.');
        });
    }

    // --- Filtering Simulation ---
    const searchInput = document.querySelector('.filters input[type="search"]');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log(`Searching for: ${e.target.value}`);
        });
    }
});
