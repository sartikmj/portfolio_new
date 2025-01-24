// For typewriter effect
document.addEventListener("DOMContentLoaded", function () {
    const typewriterTextElement = document.querySelector('.typewriter-text');
    const texts = ["Web Developer.", "Problem Solver.", "Creative Thinker."]; // Array of texts to type out
    let textIndex = 0;

    function typeText() {
        typewriterTextElement.textContent = ''; // Clear text before starting a new typing animation
        let currentText = texts[textIndex];
        let charIndex = 0;

        function typingAnimation() {
            if (charIndex < currentText.length) {
                typewriterTextElement.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typingAnimation, 100); // Adjust typing speed here
            } else {
                setTimeout(nextText, 1000); // Pause before changing text
            }
        }

        typingAnimation();
    }

    function nextText() {
        textIndex = (textIndex + 1) % texts.length; // Move to next text in array
        typeText(); // Start typing the next text
    }

    typeText(); // Initial typing animation
});
