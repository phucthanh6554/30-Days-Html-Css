const listItem = document.getElementById('list-items')
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const listItems = document.getElementById('list-items')

function addTodo(content) {
    if(content == '' || content == null)
        return

    let liElement = document.createElement('li')
    let spanElement = document.createElement('span')
    let iconElement = document.createElement('i')

    spanElement.innerText = content

    iconElement.classList.add('fa-solid', 'fa-trash')

    liElement.appendChild(spanElement)
    liElement.appendChild(iconElement)

    listItem.appendChild(liElement)
}

function removeTodo(liElement) {
    listItems.removeChild(liElement)
}

function toggleItem(liElement) {
    if(liElement.classList.contains('done-item'))
        liElement.classList.remove('done-item')
    else
        liElement.classList.add('done-item')
}

searchInput.onkeydown = function(e) {
    if(e.key === 'Enter') {
        addTodo(e.target.value)
        e.target.value = ''
    }
}

searchBtn.onclick = function() {
    let content = searchInput.value
    addTodo(content)
    searchInput.value = ''
}

listItems.onclick = function(e) {
    if(e.target.tagName == 'LI')
        toggleItem(e.target)
    else if(e.target.tagName == 'SPAN')
        toggleItem(e.target.parentElement)

    if(e.target.tagName === 'I')
        removeTodo(e.target.parentElement)
}