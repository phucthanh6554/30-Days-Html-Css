const toastContainer = document.getElementById('toast-container')

function showToastMessage(type) {
    let toast = document.createElement('div')
    
    switch (type) {
        case 'success':
            toast.classList.add('toast', 'toast-success')
            toast.innerHTML = `<i class="fa-regular fa-circle-check"></i>
                <span>This is a success message</span>
                <span class="coundown"></span>`
            break;
        case 'warning':
            toast.classList.add('toast', 'toast-warning')
            toast.innerHTML = `<i class="fa-regular fa-circle-check"></i>
                <span>This is a warning message</span>
                <span class="coundown"></span>`
            break;
        case 'error':
            toast.classList.add('toast', 'toast-error')
            toast.innerHTML = `<i class="fa-regular fa-circle-check"></i>
                <span>This is a error message</span>
                <span class="coundown"></span>`
            break;
    }

    toastContainer.appendChild(toast)

    setTimeout(() => {
        toast.classList.add('toast-hide')
    }, 5000)

    setTimeout(() => {
        toastContainer.removeChild(toast)
    }, 6500)
}