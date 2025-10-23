// Navigation & Page Switching
function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    
    const activeLink = document.querySelector(`a[onclick="showPage('${pageName}')"]`);
    if (activeLink) activeLink.classList.add('active');
    
    window.scrollTo(0, 0);
}

// Mobile nav close di link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});