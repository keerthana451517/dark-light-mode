// Get the button and the container
const modeToggle = document.getElementById('mode-toggle');
const container = document.getElementById('container');

// Add click event listener to the button
modeToggle.addEventListener('click', function() {
    // Toggle dark mode class on the container
    container.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (container.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});
