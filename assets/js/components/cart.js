function cart(db, printProducts) {
    let cart = []

    // ELementos del DOM
    const productsDOM = document.querySelector('.products_container')
    const notifyDOM = document.querySelector('.notify')
    const cartDOM = document.querySelector('.cart_body')
    const countDOM = document.querySelector('.cart_count_item')
    const totalDOM = document.querySelector('.cart_total_item')
    const checkoutDOM = document.querySelector('.btn_buy')
    const filterDOM = document.querySelector('.filter')
    const subTotalDOM = document.querySelector('.cart_total_subTotal')
    const igvDOM = document.querySelector('.cart_total_IGV')

    function printCart() {
        let htmlCart = ''

        if (cart.length === 0) {
            htmlCart += `
            <div class="cart_empty">
                <i class="bx bx-cart"></i>
                <p class="cart_empty_text">No hay productos en el Carrito</p>
            </div>
            `
            notifyDOM.classList.remove('show_notify')
        } else {
            for (const item of cart) {
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="article">
                    <div class="article_image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="article_content">
                       <h3 class="article_title">${product.name}</h3> 
                        <span class="article_price">${product.price}</span>
                        <div class="article_quantity">
                            <button type="button" class="article_quantity_btn article_minus" data-id="${item.id}">
                                <i class="bx bx-minus"></i>
                            </button>
                            <span class="article_quantity_text">${item.qty}</span>
                            <button type="button" class="article_quantity_btn article_plus" data-id="${item.id}">
                                <i class="bx bx-plus"></i>
                            </button>
                        </div>
                        <button type="button" class="article_btn remove_from_card" data-id="${item.id}">
                            <i class="bx bx-trash"></i>
                        </button>
                    </div>
                </article>     
                `
            }
            notifyDOM.classList.add('show_notify')

        }

        let aux = showTotal()

        cartDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = showItemsCount()
        countDOM.innerHTML = showItemsCount()
        totalDOM.innerHTML = showTotal()
        subTotalDOM.innerHTML = aux - (aux * .18).toFixed(2)
        igvDOM.innerHTML = (aux * .18).toFixed(2)
        

    }
    
    function addToCart(id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)
        let tabulate = {}
        let html = ''

        if (itemFinded) {
            for (const item of cart) {
                const itemQuantity = db.find(p => p.id === item.id)
                tabulate[item.id] = itemQuantity.quantity
            }
            if (tabulate[id] > itemFinded.qty ) {
                itemFinded.qty += qty
            } else {
                html = `
                    <div class="container-message">
                        <div class="message-count">
                            <p class="txt-count">Lo sentimos sucedio un problema</p>
                            <button class="btn-message-count">Siguiente</button>
                        </div>
                    </div>
                `
            }
            filterDOM.classList.remove('show-filter')
            //console.log(tabulate)
            //console.log(limitQty)
        } else {
            cart.push({ id, qty })
        }
        filterDOM.innerHTML = html
        printCart()
    }

    function removeFromCart(id, qty = 1) {
        const itemFinded = cart.find(i => i.id === id)
        const result = itemFinded.qty - qty
        if (result > 0) {
            itemFinded.qty -= qty
        } else {
            cart = cart.filter(i => i.id !== id)
        }
        printCart()
    }

    function deleteFromCart(id) {
        cart = cart.filter(i => i.id !== id)
        printCart()
    }

    function showItemsCount() {
        let suma = 0
        for (const item of cart) {
            suma += item.qty
        }
        return suma
    }

    function showTotal() {
        let total = 0
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
            total += item.qty * productFinded.price
        }
        return total
    }

    function checkout() {
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id)
                productFinded.quantity -= item.qty
        }
        if (cart.length) {
            window.alert('Muchas gracias por su Compra')
        } else {
            window.alert('No cuenta con nada en el carrito de compras')
        }
        cart = []
        printCart()
        printProducts()
        //window.alert("Todo fue exitoso ")
    }
    printCart()

    productsDOM.addEventListener('click', function (e) {
        if (e.target.closest('.add_to_cart')) {
            const id = +e.target.closest('.add_to_cart').dataset.id
            addToCart(id)
        }
    })

    cartDOM.addEventListener('click', function (e) {
        if (e.target.closest('.article_minus')) {
            const id = +e.target.closest('.article_minus').dataset.id
            removeFromCart(id)
        }

        if (e.target.closest('.article_plus')) {
            const id = +e.target.closest('.article_plus').dataset.id
            addToCart(id)
        }

        if (e.target.closest('.remove_from_card')) {
            const id = +e.target.closest('.remove_from_card').dataset.id
            deleteFromCart(id)
        }
    })

    checkoutDOM.addEventListener('click', function (e) {
        checkout()
    })
}

export default cart