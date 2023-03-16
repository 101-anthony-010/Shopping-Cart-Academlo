    function products (products) {
        const db = [...products]
        function printProducts () {
            const productsDOM = document.querySelector('.products_container')
            let htmlProduct = ''

            for (let product of db) {
                htmlProduct += `
                <article class="product">
                    <div class="product_image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product_content">
                        <button type="button" class="product_btn add_to_cart" data-id="${product.id}">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <span class="product_price">${product.price}</span>
                        <span class="product_stock">Disponible: ${product.quantity}</span>
                        <h3 class="product_title">${product.name}</h3>
                    </div>
                </article>
                `
            }
            productsDOM.innerHTML = htmlProduct
        }

        printProducts()

        return {
            db,
            printProducts
        }
    }

    export default products