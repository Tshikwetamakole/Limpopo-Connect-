/**
 * @file Manages global site functionality for Limpopo Connect.
 * @description This script handles theme toggling, simulates form submissions,
 * and provides basic interactivity for various UI components. It runs after
 * the DOM content is fully loaded.
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * ------------------------------------------------------------------------
     * THEME TOGGLE
     * ------------------------------------------------------------------------
     * Manages the dark and light mode functionality of the website.
     */
    const htmlEl = document.documentElement;

    /**
     * Applies the theme ('dark' or 'light') based on the value stored in localStorage.
     * It adds or removes the 'dark' class from the root <html> element.
     * @returns {void}
     */
    const applyTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            htmlEl.classList.add('dark');
        } else {
            // Defaults to light theme
            htmlEl.classList.remove('dark');
        }
    };

    /**
     * Toggles the current theme between 'dark' and 'light'.
     * It updates the theme value in localStorage and calls applyTheme to reflect the change.
     * @returns {void}
     */
    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'dark') {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
        applyTheme();
    };

    // Attach the theme toggle functionality to the theme toggle button.
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Apply the theme on initial page load.
    applyTheme();

    console.log("Limpopo Connect script loaded.");

    /**
     * ------------------------------------------------------------------------
     * FORM SUBMISSION SIMULATION
     * ------------------------------------------------------------------------
     * A generic handler for all form submissions on the site.
     */

    /**
     * Attaches a submit event listener to a form to simulate a submission.
     * It prevents the default form submission, gathers the form data,
     * logs it to the console, shows a confirmation alert, and then resets the form.
     * This is a placeholder for future API integration.
     * @param {string} formId - The ID of the form element to attach the handler to.
     * @param {string} formName - A descriptive name for the form for logging and alert purposes.
     * @returns {void}
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

    // Attach form submission handlers to all relevant forms.
    handleFormSubmit('signup-form', 'Sign Up Form');
    handleFormSubmit('onboarding-form', 'Onboarding Form');
    handleFormSubmit('create-post-form', 'Create Post Form');
    handleFormSubmit('settings-form', 'Settings Form');

    /**
     * ------------------------------------------------------------------------
     * MESSAGING SIMULATION
     * ------------------------------------------------------------------------
     * Simulates sending and displaying messages in a chat interface.
     */
    const messageInput = document.getElementById('message-input');
    const messageSendBtn = document.getElementById('message-send-btn');
    const messageArea = document.getElementById('message-area');

    if (messageInput && messageSendBtn && messageArea) {
        /**
         * Sends a message in the chat simulation.
         * It takes the text from the message input, creates a new message bubble,
         * appends it to the message area, and clears the input field.
         * @returns {void}
         */
        const sendMessage = () => {
            const messageText = messageInput.value.trim();
            if (messageText) {
                const messageEl = document.createElement('div');
                // The new message is styled as an outgoing message.
                messageEl.className = 'flex justify-end';
                messageEl.innerHTML = `<div class="bg-community-accent text-white p-3 rounded-lg max-w-lg">${messageText}</div>`;
                messageArea.appendChild(messageEl);
                messageInput.value = '';
                // Scroll to the bottom of the message area to show the latest message.
                messageArea.scrollTop = messageArea.scrollHeight;
            }
        };

        // Add event listeners for sending a message.
        messageSendBtn.addEventListener('click', sendMessage);
        messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                // Prevent the default Enter key behavior (like form submission)
                e.preventDefault();
                sendMessage();
            }
        });
    }

    /**
     * ------------------------------------------------------------------------
     * RSVP SIMULATION
     * ------------------------------------------------------------------------
     * Provides a one-time RSVP functionality for event detail pages.
     */
    const rsvpBtn = document.querySelector('.rsvp-btn');
    if (rsvpBtn) {
        rsvpBtn.addEventListener('click', () => {
            rsvpBtn.textContent = "✓ RSVP'd";
            rsvpBtn.disabled = true;
            console.log('User RSVPd to event.');
        }, { once: true }); // Use { once: true } to ensure the event fires only once.
    }

    /**
     * ------------------------------------------------------------------------
     * FILTERING SIMULATION
     * ------------------------------------------------------------------------
     * Logs the value of the search input field as the user types.
     */
    const searchInput = document.querySelector('.filters input[type="search"]');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            // In a real application, this would trigger a search/filter function.
            console.log(`Searching for: ${e.target.value}`);
        });
    }

    /**
     * ------------------------------------------------------------------------
     * DEAD LINK PLACEHOLDER
     * ------------------------------------------------------------------------
     * Prevents default action for anchor tags with href="#" and shows an alert.
     * This makes it clear to users that a feature is not yet implemented.
     */
    const deadLinks = document.querySelectorAll('a[href="#"]');
    deadLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("This feature is not yet implemented.");
        });
    });
});
