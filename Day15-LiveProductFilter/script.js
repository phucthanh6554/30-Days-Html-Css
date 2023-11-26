const itemList = document.getElementById('item-list')
const searchInput = document.getElementById('search-input')

var items = []

var searchTimeout
searchInput.onkeyup = function() {
    clearTimeout(searchTimeout)

    searchTimeout = setTimeout(() => {
        filterProducts()
    }, 500)
}

function filterProducts() {
    let searchText = searchInput.value

    var filteredItems = items.filter(x => x.title.toLowerCase().includes(searchText.toLowerCase()))
    itemList.innerHTML = ''

    console.log(filteredItems)

    filteredItems.forEach(x => addItem(x.title, x.image, x.price))
}

function addItem(name, image, price) {
    let template = `<div class="item-image">
            <img src="${image}" alt="">
        </div>

        <div class="item-info">
            <h4>${name}</h4>
            <p>$${price}</p>
        </div>`
    let itemElement = document.createElement('div')
    itemElement.classList.add('item')

    itemElement.innerHTML = template

    itemList.appendChild(itemElement)
}

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        items = json
        json.forEach(x => addItem(x.title, x.image, x.price))
    })