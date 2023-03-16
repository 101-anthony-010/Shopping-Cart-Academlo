function next () {
    const filter = document.querySelector('.filter')
    window.addEventListener('click', function (e) {
        if (e.target.closest('.btn-message-count')){
            filter.classList.add('show-filter')
        }  
    })
}
export default next