document.addEventListener('DOMContentLoaded', () => {
    /**
     * ------------------------------------------------------------------------
     * THEME TOGGLE
     * ------------------------------------------------------------------------
     * Handles switching the color theme of the site.
     * The 'hookups-theme' class is added or removed from the body element,
     * which triggers the CSS variable changes for the dark theme.
     */
    const htmlEl = document.documentElement;

    // Function to apply the theme based on localStorage
    const applyTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            htmlEl.classList.add('dark');
        } else {
            htmlEl.classList.remove('dark');
        }
    };

    // Apply theme on initial page load
    applyTheme();

    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.removeItem('theme');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        applyTheme();
    };

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
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
    const messageInput = document.getElementById('message-input');
    const messageSendBtn = document.getElementById('message-send-btn');
    const messageArea = document.getElementById('message-area');

    if (messageInput && messageSendBtn && messageArea) {
        const sendMessage = () => {
            const messageText = messageInput.value.trim();
            if (messageText) {
                const messageEl = document.createElement('div');
                messageEl.className = 'flex justify-end';
                messageEl.innerHTML = `<div class="bg-community-accent text-white p-3 rounded-lg max-w-lg">${messageText}</div>`;
                messageArea.appendChild(messageEl);
                messageInput.value = '';
                messageArea.scrollTop = messageArea.scrollHeight;
            }
        };
        messageSendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
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

    // --- Placeholder for dead links ---
    const deadLinks = document.querySelectorAll('a[href="#"]');
    deadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This feature is not yet implemented.");
        });
    });
});
