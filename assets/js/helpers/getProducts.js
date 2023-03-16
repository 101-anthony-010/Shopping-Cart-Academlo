async function getProducts () {
//   return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
//    .then((res) => res.json())
//    .then((data) => data)
//    .catch((err) => { console.log(err) }) 

    const persistent = window.localStorage
    
    
    try {
        const rest = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
        const data = await rest.json()
        for (const i of data) {
            if (persistent.getItem(`id${i.id}`)) {
                for (const qty of data) {
                    const getItems = persistent.getItem(`id${qty.id}`)
                    qty.quantity = getItems
                    data[qty.id-1].quantity = qty.quantity
                }
            }             
        }

        return data
    } catch (error) {
        console.log(error)
    }

}

export default getProducts