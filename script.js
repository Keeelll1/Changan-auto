const btnOpen = document.querySelectorAll('.button'),
    btnClose = document.querySelector('.popup-cross'),
    popUp = document.querySelector('.popup'),
    overlay = document.querySelector('.overlay')

    btnOpen.forEach(item => {
        item.addEventListener('click', () => {
            popUp.classList.add('active')
            overlay.classList.add('active')
        })
    })

    btnClose.addEventListener('click', () => {
        popUp.classList.remove('active')
        overlay.classList.remove('active')
    })
