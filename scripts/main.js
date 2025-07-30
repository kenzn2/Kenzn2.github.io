// Main JavaScript for Portfolio Website

class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupEmailJS();
        this.setupContactForm();
        this.setupSmoothScrolling();
    }

    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navList = document.querySelector('.nav__list');
        
        if (mobileMenuBtn && navList) {
            mobileMenuBtn.addEventListener('click', () => {
                navList.classList.toggle('active');
                mobileMenuBtn.classList.toggle('active');
            });

            // Close mobile menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav__link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                });
            });

            // Close mobile menu when clicking on social links
            const socialLinks = document.querySelectorAll('.nav__social-link');
            socialLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                    navList.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            });
        }
    }

    setupEmailJS() {
        // Initialize EmailJS
        emailjs.init("OBILFq0Nue2_T-gB7"); // Your user ID
    }

    setupContactForm() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const formStatus = document.getElementById('formStatus');
        const formMessage = document.getElementById('formMessage');

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                // Disable submit button and show loading state
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                try {
                    // Send email using EmailJS
                    const result = await emailjs.sendForm(
                        'service_0x51gpe', // Your service ID
                        'template_6x9xj5k', // Your template ID
                        form
                    );
                    
                    // Success
                    this.showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                    form.reset();
                    
                } catch (error) {
                    console.error('EmailJS error:', error);
                    this.showFormStatus('error', 'Failed to send message. Please try again later.');
                } finally {
                    // Reset submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send';
                }
            });
        }
    }

    showFormStatus(type, message) {
        const formStatus = document.getElementById('formStatus');
        const formMessage = document.getElementById('formMessage');
        
        if (formStatus && formMessage) {
            formMessage.textContent = message;
            formStatus.className = `form-status form-status--${type}`;
            formStatus.style.display = 'block';
            
            // Hide status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active navigation link
                    this.updateActiveNavLink(targetId);
                }
            });
        });
        
        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavLinkOnScroll();
        });
    }

    updateActiveNavLink(activeId) {
        const navLinks = document.querySelectorAll('.nav__link');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('nav__link--active');
            
            if (href === `#${activeId}`) {
                link.classList.add('nav__link--active');
            }
        });
    }

    updateActiveNavLinkOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.updateActiveNavLink(sectionId);
            }
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});
