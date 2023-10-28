const buttons = document.getElementsByClassName('control-btn')
const slideImg = document.getElementById('slide-img')


const images = document.querySelectorAll('.img-list img')

let currentImageIndex = 0

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function(e) {
        let action = e.target.attributes['data-action'].value

        if(action == 'next')
            nextImage()
        else 
            previousImage()
    }
}

images.forEach((element, index) => {
    element.onclick = function() {
        removeActive()
        setImage(element.src)
        element.classList.add('active')
        currentImageIndex = index
    }
})

function previousImage() {
    if (currentImageIndex == 0)
        return

    removeActive()

    images[--currentImageIndex].classList.add('active')

    setImage(images[currentImageIndex].src)
}

function nextImage() {
    if (currentImageIndex == images.length - 1)
        return

    removeActive()

    images[++currentImageIndex].classList.add('active')

    setImage(images[currentImageIndex].src)
}

function setImage(src) {
    slideImg.src = src
}

function removeActive(){
    let activeItem = document.querySelector('.img-list .active')
    activeItem.classList.remove('active')
}

function getListImage() {
    let listImage = []
    let images = document.querySelectorAll('.img-list img')

    images.forEach(x => listImage.push(x.src))

    return listImage
}