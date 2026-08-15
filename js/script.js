const toggle = document.querySelector('.menu_toggle');
const menuList = document.getElementById('menuList');

toggle.addEventListener('click', () => {
    const isOpen = menuList.classList.toggle('show');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
});
