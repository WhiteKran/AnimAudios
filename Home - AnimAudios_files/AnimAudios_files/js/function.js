// Function to toggle dark mode
document.getElementById('mode-toggle')?.addEventListener('click', function() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is enabled
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Change the button icon based on dark mode state
    const modeToggleImg = this;
    modeToggleImg.src = isDarkMode ? './AnimAudios_files/res/sun-transparent.svg' : './AnimAudios_files/res/moon.svg'; // Change icon to moon for dark mode, sun for light mode

    // Change the top image based on dark mode state
    const topImage = document.getElementById('top-image'); 
    topImage.src = isDarkMode ? './AnimAudios_files/res/logoicon-dark.svg' : './AnimAudios_files/res/logoicon.svg'; // Change the top image

    // Save the user's dark mode preference in localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
});

// Check if dark mode is enabled when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'; // Get saved preference
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode'); // If dark mode is active, apply it
        document.getElementById('mode-toggle').src = './AnimAudios_files/res/sun-transparent.svg'; // Set the dark mode top image
        document.getElementById('top-image').src = './AnimAudios_files/res/logoicon-dark.svg';
    } else {
        document.getElementById('mode-toggle').src = './AnimAudios_files/res/moon.svg'; // Set sun icon for light mode
        document.getElementById('top-image').src = './AnimAudios_files/res/logoicon.svg'; // Set the light mode top image
    }
});

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');

    // Position the menu relative to the hamburger button
    if (menu.classList.contains('active')) {
        var hamburger = document.querySelector('.hamburger');
        var hamburgerRect = hamburger.getBoundingClientRect();
        
        menu.style.left = (hamburgerRect.left - 30) + 'px';
        menu.style.top = (hamburgerRect.bottom - 10) + 'px';
    }
}