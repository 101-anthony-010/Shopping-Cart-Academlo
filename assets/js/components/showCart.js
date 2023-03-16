function showCart() {
    const btnCart = document.querySelector('.btn_cart')
    const cart = document.querySelector('.cart')

    btnCart.addEventListener('click', function () {
        cart.classList.toggle('show_cart')
    })

    cart.addEventListener('click', function (event) {
        if (event.target.closest('.btn_close')) {
            cart.classList.remove('show_cart')
        }
    })
}

export default showCart