async function getProducts () {
//   return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
//    .then((res) => res.json())
//    .then((data) => data)
//    .catch((err) => { console.log(err) }) 

    try {
        const rest = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
        const data = await rest.json()
        return data
    } catch (error) {
        console.log(error)
    }

}

export default getProducts