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

    // ── Keyboard Accessibility: ESC closes open modal ──
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });

    // ── Click outside modal container closes modal ──
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeAllModals();
            }
        });
    });
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
