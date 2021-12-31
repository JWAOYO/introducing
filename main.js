const toggleBtn = document.querySelector('.togglebutton');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_links');

function toggle() {
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
        icons.style.display = 'flex'
    } else {
        menu.style.display = 'none'
        icons.style.display = 'none'
    }
}

// toggleBtn.addEvenetListener('click', toggle());

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});