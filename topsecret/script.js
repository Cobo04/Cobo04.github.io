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