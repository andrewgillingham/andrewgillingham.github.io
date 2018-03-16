const scrollPage = selector => {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' })
}

const scrollToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

window.onload = () => {
    const buttons = document.querySelectorAll('.button--scroll')
    Object.values(buttons).forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault()
            if(!button.dataset.scrollTarget) {
                return
            }
            scrollPage(button.dataset.scrollTarget)
        })
    })
}