function showMenu() {
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.nav_menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn_menu')) {
            menu.classList.toggle('show_menu')
        }

        if (event.target.closest('.btn_close')) {
            menu.classList.remove('show_menu')
        }

        if (event.target.closest('.nav_link')) {
            menu.classList.remove('show_menu')
        }
    })
}

export default showMenu