import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./components/cart.js"
import next from "./components/continue.js"


/* Ocultar loader */
loader()
showMenu()
showCart()
next()

/* End UI */

/* Products */
const {db, printProducts} = products(await getProducts())
/* Carrito */
cart(db, printProducts)

/* UI Elements*/

