const uploadInput = document.getElementById('upload-img')
const previewImage = document.getElementById('preview-img')

uploadInput.onchange = function(e) {
    let file = e.target.files[0]

    if(file != null) {
        previewImage.setAttribute('src', URL.createObjectURL(file))
        previewImage.style.display = 'block'
    }
}

