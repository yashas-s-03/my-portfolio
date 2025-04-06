// Load particles.js config
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js config loaded');
  });
  
  // Typing effect
  new Typed('#typed-text', {
    strings: [
      "I like to listen",
      "I like to build",
      "I like to code",
      "I like to play"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
  