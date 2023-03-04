const button = document.getElementById('responsive-menu-button');
const menu = document.getElementById('phone-menu');
const closemenu = document.getElementById('close-phone-menu');
button.addEventListener('click', () => {
    menu.classList.add('active');
});

closemenu.addEventListener('click', () => {
    menu.classList.remove('active');
    console.log('closemenu');
});