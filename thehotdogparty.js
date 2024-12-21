(function() {
    'use strict';
  
    // create hot dog emojis and animate them
    function createHotdog() {
      const hotdog = document.createElement('div');
      hotdog.textContent = '🌭'; // Hot dog emoji
      hotdog.classList.add('hotdog');
  
      // Randomize horizontal position and size
      const x = Math.random() * 100; // Random position across the width (percentage)
      const size = Math.random() * 30 + 20; // Random size between 20px and 50px
  
      hotdog.style.left = `${x}vw`;
      hotdog.style.fontSize = `${size}px`;
  
      // Append to the confetti container
      const confettiContainer = document.querySelector('.confetti-container');
      confettiContainer.appendChild(hotdog);
  
      // Remove the hot dog after the animation ends
      hotdog.addEventListener('animationend', () => {
        hotdog.remove();
      });
    }
  
    // Create hot dog emojis every 1.5 seconds
    setInterval(createHotdog, 1000);
  
    // Handling the alert box styles
    var container = document.querySelector('.container');
    var mainColor = parseColor('{mainColor}').join(', ');
    var userMessage = document.querySelector('#alert-user-message');
    container.style.background = "rgba(".concat(mainColor, ", 0.75)");
    var observer = new MutationObserver(function() {
      observer.disconnect();
      if (!userMessage.textContent.trim()) userMessage.parentNode.removeChild(userMessage);
    });
    observer.observe(userMessage, {
      subtree: true,
      childList: true,
      characterData: true
    });
  
  })();