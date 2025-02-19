// script.js
import Experience from './Experience/Experience.js';

let xp; // Declare the experience variable

// Get the start screen and button
const startScreen = document.getElementById('start-screen1');
const startButton = document.getElementById('start-button1');

// Add click event to start button
startButton.addEventListener('click', () => {
    // Start fading out the start screen if you want animation
    startScreen.style.display = 'none'; // Hide the start screen

    // Initialize the WebGL experience only when the button is clicked
    xp = new Experience(document.querySelector('canvas.webgl'));
});
