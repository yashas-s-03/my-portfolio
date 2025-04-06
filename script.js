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
  particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"  // 👈 Web-like effect on hover/touch
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});
