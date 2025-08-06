// Common Pages JavaScript - For Policy and Donate Pages

// Mobile Menu Toggle
function initMobileMenu() {
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

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navList.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navList.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Donation Info Modal Functions
function showDonationInfo(type) {
    // Hide all donation info first
    hideDonationInfo();
    
    // Show the selected donation info
    const infoElement = document.getElementById(type + '-info');
    if (infoElement) {
        infoElement.classList.add('active');
        
        // Smooth scroll to the info section
        setTimeout(() => {
            infoElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 100);
    }
}

function hideDonationInfo() {
    // Hide all donation info modals
    const allInfos = document.querySelectorAll('.donation-info');
    allInfos.forEach(info => {
        info.classList.remove('active');
    });
}

// EmailJS Configuration for Policy Contact Form
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "H6_Rqj5WqHO9nrJXX",
        });
    }
}

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && typeof emailjs !== 'undefined') {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            formStatus.style.display = 'none';

            // Send email using EmailJS
            emailjs.sendForm('service_tn3r7bs', 'template_wfwjg4r', this)
                .then(function() {
                    // Success
                    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                    formStatus.className = 'form-status form-status--success';
                    formStatus.style.display = 'block';
                    contactForm.reset();
                }, function(error) {
                    // Error
                    formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
                    formStatus.className = 'form-status form-status--error';
                    formStatus.style.display = 'block';
                    console.log('EmailJS error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    
                    // Auto hide status after 5 seconds
                    setTimeout(function() {
                        formStatus.style.display = 'none';
                    }, 5000);
                });
        });
    }
}

// Copy to clipboard function for crypto addresses
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Address copied to clipboard!');
        }).catch(() => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('Address copied to clipboard!');
        } else {
            alert('Failed to copy address');
        }
    } catch (err) {
        alert('Failed to copy address');
    }
    
    document.body.removeChild(textArea);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initEmailJS();
    initContactForm();

    // Close donation info when clicking outside
    document.addEventListener('click', function(event) {
        const donationInfos = document.querySelectorAll('.donation-info.active');
        const donateCards = document.querySelectorAll('.donate-card');
        
        let clickedInsideCard = false;
        donateCards.forEach(card => {
            if (card.contains(event.target)) {
                clickedInsideCard = true;
            }
        });

        let clickedInsideInfo = false;
        donationInfos.forEach(info => {
            if (info.contains(event.target)) {
                clickedInsideInfo = true;
            }
        });

        if (!clickedInsideCard && !clickedInsideInfo) {
            hideDonationInfo();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Make functions available globally
window.showDonationInfo = showDonationInfo;
window.hideDonationInfo = hideDonationInfo;
window.copyToClipboard = copyToClipboard;
