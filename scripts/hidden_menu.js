function openMenu(event) {
    let hidd_menu = document.querySelector('.hidden_menu');
    hidd_menu.style.display = 'block';
}

function closeMenu(event) {
    let hidd_menu = document.querySelector('.hidden_menu');
    hidd_menu.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function(event){
    let btn_click = document.querySelector('.header_right_menu');
    let close_hidden_btn = document.querySelector('.hidden_menu_close_btn');
    btn_click.addEventListener('click', openMenu);
    close_hidden_btn.addEventListener('click', closeMenu);
});