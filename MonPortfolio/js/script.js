document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    const formMessage = document.getElementById('form-message');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        formMessage.innerHTML = '<div class="alert alert-info">Envoi en cours...</div>';
        setTimeout(function() {
          formMessage.innerHTML = '<div class="alert alert-success">Merci ! Votre message a bien été envoyé.</div>';
          form.reset();
          form.classList.remove('was-validated');
          setTimeout(function() {
            formMessage.innerHTML = '';
          }, 5000);
        }, 1500);
      } else {
        form.classList.add('was-validated');
      }
    });
  }
});


tsParticles.load("tsparticles", {
  background: {
    color: "#f0f1e8ff"
  },
  particles: {
    number: {
      value: 60,
    },
    color: {
      value: "#0051ffff"
    },
    links: {
      color: "#000000ff",
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: {
        default: "out"
      }
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 },
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});

const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.transform = `translate(${posX - 15}px, ${posY - 15}px)`;
});