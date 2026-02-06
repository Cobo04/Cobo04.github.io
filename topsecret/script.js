// Get a reference to the button element
const confettiButton = document.getElementById('confetti-button');

// Add a click event listener
confettiButton.addEventListener('click', () => {
    // Call the confetti function with desired options
    confetti({
        particleCount: 100, // Number of particles
        spread: 70, // How wide the confetti spreads
        origin: { y: 0.6 } // The origin point of the explosion (from the button's vertical position)
    });

    const noButton = document.getElementById("no-button");
    noButton.style.display = "none";

    const title = document.getElementById("title");
    title.textContent = "YAY! 💖💖💖";

    const yesButton = document.getElementById("confetti-button");
    yesButton.textContent = "View Your Bouquet 💌";
    /* Make the button now redirect the user to plan.html */
    yesButton.addEventListener('click', () => {
        window.location.href = 'plan.html';
    });

});

const noButton = document.getElementById("no-button");

noButton.addEventListener("mouseenter", function() {
    const container = document.querySelector(".container");
    const button = this;
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    // Calculate maximum positions to keep button within container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    // Generate random positions
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Set the button position to absolute if not already
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});