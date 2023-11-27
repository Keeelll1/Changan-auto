const btnOpen = document.querySelectorAll('.order-call'),
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

const downloadMore = document.querySelector('.donwload-more'),
    addBlock = document.querySelector('.add-more-cards'),
    dropBlock = document.querySelector('.all-model-menu-2')

    downloadMore.addEventListener('click', () => {
        addBlock.style.display = 'block'
        downloadMore.style.display = 'none'
        dropBlock.classList.toggle('active')
    })

const dropBtn = document.querySelector('.all-model-button'),
    dropContent = document.querySelectorAll('.model-menu-list')

    dropBtn.addEventListener('click', () => {
        dropBtn.classList.toggle('active')
        dropContent.forEach(item => {
            item.classList.toggle('active')
        })
    })

const burgerMenu = document.querySelector('.span-wrapper'),
    burgerContent = document.querySelector('.burger-menu-content'),
    closeIcon = document.querySelector('.burger-menu-icon')

    burgerMenu.addEventListener('click', () => {
        burgerContent.classList.add('active')
        burgerMenu.style.display = 'none'
    })

    closeIcon.addEventListener('click', () => {
        burgerContent.classList.remove('active')
        burgerMenu.style.display = 'flex'
    })

