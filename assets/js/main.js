import loader from "./components/loader.js"
import showMenu from "./components/showMenu.js"
import showCart from "./components/showCart.js"
import products from "./components/products.js"
import getProducts from "./helpers/getProducts.js"
import cart from "./components/cart.js"
import next from "./components/continue.js"

/* UI Elements*/
const persistent = window.localStorage
const getItems = persistent.getItem('key')

persistent.setItem('key', 'hola')
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

