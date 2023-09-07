const images = document.querySelectorAll('.wrapper-image img')

const gallery = document.getElementById('gallery');
const closeBth = document.getElementById('close-btn')

const imgArr = ['assets/img1.jpeg', 'assets/img2.jpeg', 'assets/img3.jpeg', 'assets/img4.jpeg', 'assets/img5.jpeg', 'assets/img6.jpeg', 'assets/img7.jpeg', 'assets/img8.jpeg']

const galleryShowImage = document.getElementById('gallery-show-image')

const nextIcon = document.getElementById('gallery-arrow-right')
const previousIcon = document.getElementById('gallery-arrow-left')

var currentImgIndex = 0;

function openGallery(element) {
    var imgUrl = element.target.getAttribute('src')
    galleryShowImage.setAttribute('src', imgUrl)

    gallery.classList.add('gallery-active')

    currentImgIndex = toggerSlideButton(imgUrl)
}

function closeGallery() {
    gallery.classList.remove('gallery-active')
}

function toggerSlideButton(imgUrl) {
    nextIcon.classList.remove('gallery-icon-hide')
    previousIcon.classList.remove('gallery-icon-hide')

    var index = imgArr.indexOf(imgUrl) 

    if(index == 0)
        previousIcon.classList.add('gallery-icon-hide')

    if(index == imgArr.length - 1)
        nextIcon.classList.add('gallery-icon-hide')

    return index
}

function slideImage(change) {
    currentImgIndex += change;

    if(currentImgIndex < 0 || currentImgIndex > imgArr.length - 1)
        return;

    galleryShowImage.setAttribute('src', imgArr[currentImgIndex])

    toggerSlideButton(imgArr[currentImgIndex])
}

images.forEach(x => x.onclick = openGallery)

closeBth.onclick = closeGallery;

nextIcon.onclick = () => slideImage(1)
previousIcon.onclick = () => slideImage(-1)