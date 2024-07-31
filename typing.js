document.addEventListener('DOMContentLoaded', function() {
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

    const titleElements = document.querySelectorAll('.title, #title');
    titleElements.forEach(applyTypingAnimation);
});
