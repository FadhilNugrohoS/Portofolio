// Select all navigation links
var navLinks = document.querySelectorAll('.nav-link');

// Add click event listener to each link
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(function(innerLink) {
            innerLink.classList.remove('active');
        });

        // Add 'active' class to clicked link
        this.classList.add('active');
    });
});