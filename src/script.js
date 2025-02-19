import Experience from './Experience/Experience.js';

let xp; // Declare the experience variable

// Get the start screen and button
const loadingScreen = document.getElementById('loading-screen');
const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');

// Add click event to start button
startButton.addEventListener('click', () => {
    console.log('Click initialized');
    
    // Show the loading screen and hide the start screen
    loadingScreen.style.display = 'flex'; // Show loading screen
    startScreen.style.display = 'none'; // Hide the start screen

    // Initialize the WebGL experience only when the button is clicked
    xp = new Experience(document.querySelector('canvas.webgl'));

    // Hide the loading screen after some resources are loaded
    // This could be your asset loading logic: simulate a loading delay here
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide loading screen after loading
    }, 3000); // Simulating a 2-second loading period, replace with actual loading logic
});
