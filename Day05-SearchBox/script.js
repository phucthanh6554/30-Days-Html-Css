const searchBtn = document.getElementById('search-box-btn')
const searchBox = document.getElementById('search-box')
const searchBoxInput = document.querySelector('.search-box-input input')

// 0 is close 1 is open
let isOpen = false;

function toggleSearchBox() {
    if(isOpen)
        searchBox.classList.remove('search-box-open')
    else
    {
        searchBox.classList.add('search-box-open')
        searchBoxInput.focus()
    }

    isOpen = !isOpen
}

searchBtn.onclick = toggleSearchBox;