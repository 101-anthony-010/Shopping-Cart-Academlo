function loader(){
    window.addEventListener('load', function () {
        const loader = document.querySelector('.loader')
        loader.classList.add('loader_hidden')
    })
}

export default loader