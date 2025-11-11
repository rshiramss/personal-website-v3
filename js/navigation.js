document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const docLinks = document.querySelectorAll('.doc-link');

    function showSection(hash) {
        // If no hash, default to #about
        const targetHash = hash || '#about';
        const targetId = targetHash.substring(1);

        // Hide all sections
        sections.forEach(section => {
            section.classList.add('section-hidden');
        });

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('section-hidden');
        }

        // Update nav link styles
        navLinks.forEach(link => {
            // Check if the link's href matches the targetHash
            // or if it's a doc page, check if the "projects" link should be active
            const isDocPage = targetId.endsWith('-doc');
            const linkHref = link.getAttribute('href');

            if (linkHref === targetHash || (isDocPage && linkHref === '#projects')) {
                // Active link
                link.classList.remove('text-subtle');
                link.classList.add('text-accent', 'font-medium');
            } else {
                // Inactive links
                link.classList.add('text-subtle');
                link.classList.remove('text-accent', 'font-medium');
            }
        });

        // Scroll to top of main content area on section change
        if (targetId.endsWith('-doc')) {
            document.querySelector('main').scrollTop = 0;
        }
    }

    // Function to handle link clicks
    function handleLinkClick(e, link) {
        e.preventDefault(); // Stop the default jump
        const hash = link.getAttribute('href');
        if (window.location.hash !== hash) {
            window.location.hash = hash;
        } else {
            // If clicking the same link, just show it
            showSection(hash);
        }
    }

    // Add click listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => handleLinkClick(e, link));
    });

    // Add click listeners to doc links (e.g., "VIEW DOCS", "← Back to Projects")
    docLinks.forEach(link => {
        link.addEventListener('click', (e) => handleLinkClick(e, link));
    });

    // Listen for hash changes (e.g., browser back/forward)
    window.addEventListener('hashchange', () => {
        showSection(window.location.hash);
    });

    // Show initial section based on URL hash on page load
    showSection(window.location.hash || '#about');
});
