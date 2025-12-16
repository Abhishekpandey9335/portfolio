// Function 5: Initialize the site and attach all event listeners
document.addEventListener('DOMContentLoaded', () => {

    // ... (existing code for showWelcomeMessage and theme initialization) ...

    const contactForm = document.getElementById('contact-form');
    // ADD THIS NEW CONSTANT
    const forgotPasswordForm = document.getElementById('forgot-password-form');

    // ... (existing code for theme and dark mode listener) ...

    // Attach Contact Form Listener
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // ATTACH NEW FORGOT PASSWORD LISTENER
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPasswordSubmit);
    }
});
// Function 4: Forgot Password Form Submission Handler
function handleForgotPasswordSubmit(event) {
    event.preventDefault();

    const form = event.target.closest('form');
    if (!form) return;

    const email = form.querySelector('input[type="email"]').value;

    console.log(`Forgot Password Submitted for Email: ${email}`);
    alert(`A password reset link has been successfully sent to ${email}. (Note: This is a frontend simulation.)`);
    form.reset(); // Clear the form fields
}
// --- script.js ---

// Function 1: Simple Welcome Message (Prints to the browser's console)
function showWelcomeMessage() {
    const channelName = "Tech Fire AP";
    console.log(`%c🚀 Welcome to the official ${channelName} website!`, 'color: #1e90ff; font-size: 16px;');
}

// Function 2: Toggle Dark/Light Mode with localStorage saving
function toggleDarkMode() {
    const body = document.getElementById('body');
    const toggleButton = document.getElementById('dark-mode-toggle');

    body.classList.toggle('light-mode');

    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
    console.log(`Theme toggled to: ${isLightMode ? 'Light' : 'Dark'}`);
}

// Function 3: Contact Form Submission Handler - remains the same
function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target.closest('form');
    if (!form) return;

    // Get values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    console.log(`Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset(); // Clear the form fields
}


// Function 4: Initialize the site and attach all event listeners
document.addEventListener('DOMContentLoaded', () => {

    showWelcomeMessage();

    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.getElementById('body');
    // Video click handler removed as links now open YouTube directly
    const contactForm = document.getElementById('contact-form');


    // --- 1. THEME INITIALIZATION ---
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    } else {
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }

    // Attach Dark Mode Toggle Listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // --- 2. FORM SUBMISSION ---

    // Attach Contact Form Listener
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

// --- script.js ---

// Function 1: Simple Welcome Message (Prints to the browser's console)
function showWelcomeMessage() {
    const channelName = "Tech Fire AP";
    console.log(`%c🚀 Welcome to the official ${channelName} website!`, 'color: #1e90ff; font-size: 16px;');
}

// Function 2: Toggle Dark/Light Mode with localStorage saving
function toggleDarkMode() {
    const body = document.getElementById('body');
    const toggleButton = document.getElementById('dark-mode-toggle');

    body.classList.toggle('light-mode');

    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
    console.log(`Theme toggled to: ${isLightMode ? 'Light' : 'Dark'}`);
}

// Function 3: Video Popup/Modal (Simulated) - remains the same
function handlePlayButtonClick(event) {
    const playButton = event.target.closest('.play-button');
    if (!playButton) return;

    event.preventDefault();

    const videoId = playButton.getAttribute('data-video-id');

    if (videoId) {
        console.log(`Attempting to play video with ID: ${videoId}`);
        alert(`Playing video ${videoId}! (Modal function triggered)`);
    }
}

// Function 4: Contact Form Submission Handler - remains the same
function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target.closest('form');
    if (!form) return;

    // Get values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    console.log(`Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset(); // Clear the form fields
}


// Function 5: Initialize the site and attach all event listeners
document.addEventListener('DOMContentLoaded', () => {

    showWelcomeMessage();

    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.getElementById('body');
    // Removed old video filter button logic
    const videoGrid = document.getElementById('video-grid');
    const contactForm = document.getElementById('contact-form');


    // --- 1. THEME INITIALIZATION ---
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    } else {
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }

    // Attach Dark Mode Toggle Listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // --- 2. VIDEO PLAYBACK & FORM SUBMISSION ---

    // Attach Play Button Listener (Event Delegation)
    if (videoGrid) {
        // This will now apply to video cards on index.html AND videos.html
        videoGrid.addEventListener('click', handlePlayButtonClick);
    }

    // Attach Contact Form Listener
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

// --- script.js ---

// Function 1: Simple Welcome Message (Prints to the browser's console)
function showWelcomeMessage() {
    const channelName = "Tech Fire AP";
    console.log(`%c🚀 Welcome to the official ${channelName} website!`, 'color: #1e90ff; font-size: 16px;');
}

// Function 2: Toggle Dark/Light Mode with localStorage saving
function toggleDarkMode() {
    const body = document.getElementById('body');
    const toggleButton = document.getElementById('dark-mode-toggle');

    body.classList.toggle('light-mode');

    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'dark');
    }
    console.log(`Theme toggled to: ${isLightMode ? 'Light' : 'Dark'}`);
}

// Function 3: Filter Videos by category
function filterVideos(category) {
    const videoCards = document.querySelectorAll('#video-grid .video-card');
    const isFiltering = category !== 'all';

    videoCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (isFiltering) {
            // Show only matching cards
            if (cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        } else {
            // Show all cards
            card.style.display = 'block';
        }
    });
    console.log(`Videos filtered by: ${category}`);
}

// Function 4: Video Popup/Modal (Simulated)
function handlePlayButtonClick(event) {
    const playButton = event.target.closest('.play-button');
    if (!playButton) return;

    event.preventDefault();

    const videoId = playButton.getAttribute('data-video-id');

    if (videoId) {
        console.log(`Attempting to play video with ID: ${videoId}`);
        alert(`Playing video ${videoId}! (Modal function triggered)`);
    }
}

// Function 5: Contact Form Submission Handler (for index.html contact form)
function handleContactSubmit(event) {
    event.preventDefault();

    const form = event.target.closest('form');
    if (!form) return;

    // Get values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    console.log(`Form Submitted: Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for your message! We will get back to you soon.');
    form.reset(); // Clear the form fields
}


// Function 6: Initialize the site and attach all event listeners
document.addEventListener('DOMContentLoaded', () => {

    showWelcomeMessage();

    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.getElementById('body');
    const filterButton = document.getElementById('video-filter-button');
    const videoGrid = document.getElementById('video-grid');
    const contactForm = document.getElementById('contact-form');


    // --- 1. THEME INITIALIZATION ---
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    } else {
        // Ensure default state is set correctly (default dark)
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }

    // Attach Dark Mode Toggle Listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // --- 2. VIDEO FILTER INITIALIZATION & TOGGLE ---
    if (filterButton) {
        // Enforce the initial state from the HTML (Videos (Code))
        const initialFilter = filterButton.getAttribute('data-active-filter');
        filterVideos(initialFilter || 'all');

        // Listener for the filter button
        filterButton.addEventListener('click', (e) => {
            e.preventDefault();

            let currentFilter = filterButton.getAttribute('data-active-filter');

            if (currentFilter === 'code') {
                filterVideos('all');
                filterButton.setAttribute('data-active-filter', 'all');
                filterButton.textContent = 'Videos (All)';
            } else {
                filterVideos('code');
                filterButton.setAttribute('data-active-filter', 'code');
                filterButton.textContent = 'Videos (Code)';
            }
        });
    }

    // --- 3. VIDEO PLAYBACK & FORM SUBMISSION ---

    // Attach Play Button Listener (Event Delegation)
    if (videoGrid) {
        videoGrid.addEventListener('click', handlePlayButtonClick);
    }

    // Attach Contact Form Listener (for index.html form)
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});