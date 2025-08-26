const articles = {
    svelte: "Why Svelte Is the Framework to Watch in 2025",
    "react-vue": "React vs Vue: The Complete 2025 Guide",
    debugging: "Debugging Like a Pro: Tools and Mindsets",
    vscode: "VS Code Extensions That Will Save You Hours",
};

function goHome() {
    location.reload();
}

function openArticle(articleId) {
    alert(
        `Opening article: ${articles[articleId]}\n\nThis will open in a new page when fully implemented.`
    );
}

function performSearch() {
    const query = document.getElementById("searchInput").value.trim();
    const results = document.getElementById("searchResults");
    
    if (!query) {
        results.classList.remove("show");
        return;
    }
    
    const matches = Object.entries(articles).filter(([id, title]) =>
        title.toLowerCase().includes(query.toLowerCase())
    );
    
    if (matches.length === 0) {
        results.innerHTML = `<div class="search-result-item">No results found for "${query}"</div>`;
    } else {
        results.innerHTML = matches
            .map(
                ([id, title]) =>
                    `<div class="search-result-item" onclick="openArticle('${id}')">
                        <div class="search-result-title">${title}</div>
                    </div>`
            )
            .join("");
    }
    results.classList.add("show");
}

// Mobile navigation toggle function
function toggleMobileMenu() {
    const nav = document.getElementById('mobileNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    nav.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = toggle.querySelectorAll('span');
    if (nav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Close mobile menu when clicking navigation links
function closeMobileMenuOnLinkClick() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('mobileNav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const spans = toggle.querySelectorAll('span');
            
            nav.classList.remove('active');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Enhanced click outside handler for both search and mobile menu
document.addEventListener("click", function (e) {
    // Handle search results
    if (!document.querySelector(".search-container").contains(e.target)) {
        document.getElementById("searchResults").classList.remove("show");
    }
    
    // Handle mobile menu
    const nav = document.getElementById('mobileNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
        const spans = toggle.querySelectorAll('span');
        nav.classList.remove('active');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Handle window resize - close mobile menu on desktop
window.addEventListener('resize', function() {
    const nav = document.getElementById('mobileNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    if (window.innerWidth > 768 && nav) {
        const spans = toggle.querySelectorAll('span');
        nav.classList.remove('active');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                performSearch();
            }
        });
    }
    
    // Initialize mobile menu link handlers
    closeMobileMenuOnLinkClick();
    
    console.log("Tell Me More Tech - Home page loaded successfully");
});

// Optional: Add smooth scrolling for internal links
function addSmoothScrolling() {
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
}

// Initialize smooth scrolling when DOM is loaded
document.addEventListener('DOMContentLoaded', addSmoothScrolling);