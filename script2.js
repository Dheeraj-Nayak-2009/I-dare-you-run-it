window.onload = function() {
    const name = localStorage.getItem('name');
    const titleElement = document.getElementById('title');
    if (name) {
        titleElement.textContent = `Welcome to the realm of magic, ${name}!`;
    } else {
        titleElement.textContent = 'Welcome, Guest!';
    }
    applyTypingAnimation(titleElement); // Apply the typing animation after setting the text
};

// Include the applyTypingAnimation function from typing.js
function applyTypingAnimation(element) {
    const text = element.textContent;
    const length = text.length;
    const typingDuration = 3; // duration in seconds

    element.style.width = '0';
    element.style.animation = `typing ${typingDuration}s steps(${length}, end) forwards, blink 0.75s step-end infinite`;

    // Trigger reflow to restart the animation
    element.getBoundingClientRect();

    // Apply width after setting the animation
    setTimeout(() => {
        element.style.width = `${length}ch`;
    }, 0);
}
