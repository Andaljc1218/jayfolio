// ===========================================
// LOADING SCREEN
// ===========================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000);
    }
});

// ===========================================
// MOBILE NAVIGATION TOGGLE
// ===========================================

const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================================
// SMOOTH SCROLL & ACTIVE NAV STATE
// ===========================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Handle navigation click
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Only prevent default for same-page links
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// ===========================================
// UPDATE ACTIVE NAV ON SCROLL
// ===========================================

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    // Update active nav link based on current section
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes('#') && href.split('#')[1] === current) {
            link.classList.add('active');
        }
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ===========================================
// BACK TO TOP BUTTON
// ===========================================

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================================
// FORM SUBMISSION HANDLING
// ===========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create success message
        const successMsg = document.createElement('div');
        successMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(99, 102, 241, 0.4);
            z-index: 10000;
            text-align: center;
            animation: slideIn 0.3s ease;
        `;
        successMsg.innerHTML = `
            <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">Thank you, ${name}! 🎉</h3>
            <p>Your message has been received.</p>

        `;
        
        document.body.appendChild(successMsg);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successMsg.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => successMsg.remove(), 300);
        }, 3000);
        
        // Reset form
        this.reset();
    });
}

// ===========================================
// ANIMATED PARTICLES BACKGROUND
// ===========================================

const particles = document.getElementById('particles');
if (particles) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particles.appendChild(particle);
    }
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translate(-50%, -60%);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -40%);
        }
    }
`;
document.head.appendChild(style);

// ===========================================
// SCROLL ANIMATIONS (AOS)
// ===========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===========================================
// PROJECTS PAGE - HORIZONTAL SCROLL BUTTONS
// ===========================================

const projectsContainer = document.getElementById('projectsContainer');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (projectsContainer && scrollLeftBtn && scrollRightBtn) {
    const scrollAmount = 400;
    
    // Scroll left
    scrollLeftBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Scroll right
    scrollRightBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Update button states based on scroll position
    function updateScrollButtons() {
        const scrollLeft = projectsContainer.scrollLeft;
        const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
        
        scrollLeftBtn.disabled = scrollLeft <= 0;
        scrollRightBtn.disabled = scrollLeft >= maxScroll - 5;
    }
    
    // Initial check
    updateScrollButtons();
    
    // Update on scroll
    projectsContainer.addEventListener('scroll', updateScrollButtons);
    
    // Update on window resize
    window.addEventListener('resize', updateScrollButtons);
    
    // Keyboard navigation
    projectsContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollLeftBtn.click();
        } else if (e.key === 'ArrowRight') {
            scrollRightBtn.click();
        }
    });
}

// ===========================================
// PROJECTS FILTER
// ===========================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter project cards with animation
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    if (filterValue === 'all') {
                        card.classList.remove('hidden');
                        card.style.display = 'flex';
                    } else {
                        const categories = card.getAttribute('data-category');
                        if (categories && categories.includes(filterValue)) {
                            card.classList.remove('hidden');
                            card.style.display = 'flex';
                        } else {
                            card.classList.add('hidden');
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    }
                }, index * 50);
            });
            
            // Reset scroll position after filter
            setTimeout(() => {
                if (projectsContainer) {
                    projectsContainer.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }, 400);
        });
    });
}

// ===========================================
// TYPING EFFECT (Optional)
// ===========================================

const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// ===========================================
// SMOOTH REVEAL FOR SKILL BARS
// ===========================================

const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-out forwards';
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ===========================================
// CONSOLE MESSAGE (Easter Egg)
// ===========================================

console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cThis portfolio was built with HCI principles in mind.', 'font-size: 14px; color: #8b5cf6;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'font-size: 12px; color: #94a3b8;');