window.onload = function () {
    setTimeout(function() {
      // Select the hero text element
      var heroText = document.querySelector('.hero-heading');
  
      // Set the initial position of the hero text element to be off the bottom of the screen
      heroText.style.bottom = "-100%";
  
      // Fade in the hero text element
      heroText.style.opacity = "1";
  
      // Animate the hero text element moving up from the bottom of the screen
      heroText.style.bottom = "0";
    }, 3000); // 3 seconds
  }

