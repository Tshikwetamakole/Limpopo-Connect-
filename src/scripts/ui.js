/**
 * @file Manages general UI interactions and dynamic content.
 * @description This script handles form submissions, profile data display,
 * chat simulation, and other interactive elements across the site.
 */

import { STORAGE_KEYS } from './constants.js';

// --- User Profile Data Management ---

const getUserProfile = () => {
  const profileJson = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return profileJson ? JSON.parse(profileJson) : null;
};

const saveUserProfile = (profileData) => {
  const existingProfile = getUserProfile() || {};
  const updatedProfile = { ...existingProfile, ...profileData };
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updatedProfile));
  console.log('User profile saved:', updatedProfile);
};

// --- Form Submission Handling ---

const handleGenericFormSubmit = (formId, formName) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(`${formName} submitted:`, data);
      alert(`${formName} submitted successfully! (Check console for data)`);
      form.reset();
    });
  }
};

const initializeFormHandlers = () => {
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(signupForm);
      const data = Object.fromEntries(formData.entries());
      saveUserProfile(data);
      window.location.href = '/onboarding/';
    });
  }

  const onboardingForm = document.getElementById('onboarding-form');
  if (onboardingForm) {
    onboardingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(onboardingForm);
      const data = Object.fromEntries(formData.entries());
      saveUserProfile(data);
      window.location.href = '/profile/';
    });
  }

  handleGenericFormSubmit('create-post-form', 'Create Post Form');
  handleGenericFormSubmit('settings-form', 'Settings Form');
};

// --- Dynamic Profile Page Population ---

const populateProfilePage = () => {
  const usernameElement = document.getElementById('profile-username');
  if (!usernameElement) return;

  const userProfile = getUserProfile();
  if (userProfile) {
    const avatarElement = document.getElementById('profile-avatar');
    if (avatarElement && userProfile['profile-image-url']) {
      avatarElement.src = userProfile['profile-image-url'];
    }
    if (userProfile.username) {
      usernameElement.textContent = userProfile.username;
    }
  }
};

// --- Messaging Simulation ---

const initializeMessaging = () => {
  const messageInput = document.getElementById('message-input');
  const messageSendBtn = document.getElementById('message-send-btn');
  const messageArea = document.getElementById('message-area');

  if (!messageInput || !messageSendBtn || !messageArea) return;

  const sendMessage = () => {
    const messageText = messageInput.value.trim();
    if (messageText) {
      const messageEl = document.createElement('div');
      messageEl.className = 'flex justify-end';
      messageEl.innerHTML = `<div class="bg-community-accent dark:bg-hookups-accent text-white p-3 rounded-lg max-w-lg">${messageText}</div>`;
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
};

/**
 * Initializes all UI components and event listeners.
 * This function should be called on the client side.
 */
export const initializeUI = () => {
  initializeFormHandlers();
  populateProfilePage();
  initializeMessaging();

  // RSVP Simulation
  const rsvpBtn = document.querySelector('.rsvp-btn');
  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', () => {
      rsvpBtn.textContent = "✓ RSVP'd";
      rsvpBtn.disabled = true;
    }, { once: true });
  }

  // Search/Filter Simulation
  const searchInput = document.querySelector('.filters input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      console.log(`Searching for: ${e.target.value}`);
    });
  }
};
