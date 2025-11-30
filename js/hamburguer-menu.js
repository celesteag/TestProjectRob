document.getElementById('menu-icon').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');

    // Togglamos la clase "open" para mostrar o esconder el menú
    navLinks.classList.toggle('open');
    menuIcon.classList.toggle('open');
});