
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const header = document.querySelector('header');
  const toggleMenu = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  toggleMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    toggleMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on nav links
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      toggleMenu.classList.remove('active');
    });
  });
  
  // Initialize particles.js
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffd700"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffd700",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  // Animate elements when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const elements = document.querySelectorAll('.project-card, .about-content, .about-image, .contact-content, .contact-form-preview');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
  
  // Helper class for animations
  function fadeIn(element) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }
});

// Function to simulate the fade-in animation that's triggered by the IntersectionObserver
function fadeIn(element) {
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 300);
}

// Create placeholder pages
function createPlaceholderPages() {
  const pages = ['portfolio.html', 'about.html', 'contact.html'];
  
  pages.forEach(page => {
    if (!pageExists(page)) {
      const content = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pavel Dutka | ${page.replace('.html', '').charAt(0).toUpperCase() + page.replace('.html', '').slice(1)}</title>
            <meta name="description" content="Portfolio of Pavel Dutka - 3D Artist & Developer specializing in automation, web apps, and 3D visualization" />
            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
            <link rel="stylesheet" href="styles.css">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
          </head>
          <body>
            <div id="particles-js"></div>
            
            <header>
              <div class="container">
                <nav>
                  <a href="index.html" class="logo">
                    <img src="/images/logo_gold.svg" alt="PD Logo">
                  </a>
                  <div class="menu-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="portfolio.html" ${page === 'portfolio.html' ? 'class="active"' : ''}>Portfolio</a></li>
                    <li><a href="about.html" ${page === 'about.html' ? 'class="active"' : ''}>About</a></li>
                    <li><a href="contact.html" ${page === 'contact.html' ? 'class="active"' : ''}>Contact</a></li>
                  </ul>
                </nav>
              </div>
            </header>

            <main>
              <section class="hero">
                <div class="container">
                  <div class="hero-content">
                    <h1 class="glowing-text">${page.replace('.html', '').charAt(0).toUpperCase() + page.replace('.html', '').slice(1)}</h1>
                    <p>This page is under construction. Please check back soon!</p>
                    <div class="cta-buttons">
                      <a href="index.html" class="btn btn-primary">Back to Home</a>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            <footer>
              <div class="container">
                <div class="footer-content">
                  <div class="footer-logo">
                    <img src="/images/logo_gold.svg" alt="PD Logo">
                    <p>Pavel Dutka</p>
                  </div>
                  <div class="footer-links">
                    <div class="footer-link-group">
                      <h3>Navigation</h3>
                      <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                    <div class="footer-link-group">
                      <h3>Social</h3>
                      <ul>
                        <li><a href="#" target="_blank">LinkedIn</a></li>
                        <li><a href="#" target="_blank">GitHub</a></li>
                        <li><a href="#" target="_blank">Instagram</a></li>
                        <li><a href="#" target="_blank">Behance</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="footer-bottom">
                  <p>&copy; 2023 Pavel Dutka. All rights reserved.</p>
                </div>
              </div>
            </footer>

            <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
            <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
            <script src="script.js"></script>
          </body>
        </html>
      `;
      
      console.log(`Would create ${page} here in a real environment`);
    }
  });
}

function pageExists(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  try {
    http.send();
    return http.status != 404;
  } catch(e) {
    return false;
  }
}

// Attempt to create placeholder pages when possible
// Note: This may not work in all environments due to security restrictions
setTimeout(createPlaceholderPages, 2000);
