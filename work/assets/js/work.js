/**
 * JavaScript for /work/ Recruiter & Product Designer Portfolio Section
 */

document.addEventListener('DOMContentLoaded', () => {
    // ── Mobile Navigation Menu Toggle ──
    const mobileToggle = document.querySelector('.work-mobile-toggle');
    const navLinks = document.querySelector('.work-nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });
    }

    // ── Close mobile menu when clicking links ──
    document.querySelectorAll('.work-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // ── Floating Navbar Active Link Scroll Spy ──
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.floating-navbar .nav-item');

    if (sections.length > 0 && navItems.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navItems.forEach(item => {
                        if (item.getAttribute('data-section') === id) {
                            item.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
});

/**
 * Open a specific case study modal by ID
 * @param {string} modalId 
 */
function openCaseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus close button for accessibility
        const closeBtn = modal.querySelector('.modal-close-btn');
        if (closeBtn) {
            setTimeout(() => closeBtn.focus(), 100);
        }
    }
}

/**
 * Close a specific case study modal by ID
 * @param {string} modalId 
 */
function closeCaseModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Close all open modals
 */
function closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = '';
}
