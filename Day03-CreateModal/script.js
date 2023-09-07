const modalBox = document.getElementById('modal-box')

function openModal() {
    modalBox.classList.add('modal__active')
}

function closeModal() {
    modalBox.classList.remove('modal__active')
}

document.getElementById('open-modal-button').onclick = openModal;

const closeButtons = document.getElementsByClassName('close__btn');

for(let i = 0; i < closeButtons.length; i++)
    closeButtons[i].onclick = closeModal;

modalBox.onclick = function(e) {
    console.log(e.target.classList)

    if(e.target.classList.contains('modal'))
        closeModal()
}