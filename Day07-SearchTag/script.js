const searchBoxTags = document.getElementById('search-box-tags')

const searchMap = new Map();

const searchBtn = document.getElementById('search-input')

const removeAllBtn = document.getElementById('remove-all-btn')

function AddTag(content) {
    if(searchMap.has(content))
        return

    let liElement = document.createElement('li')
    let iconElement = document.createElement('i')
    iconElement.classList.add('fa-solid', 'fa-xmark')
    liElement.innerText = content
    liElement.append(iconElement)

    searchBoxTags.appendChild(liElement)

    searchMap.set(content, true)
}

function RemoveTag(element) {
    searchBoxTags.removeChild(element)

    let content = element.innerText;
    searchMap.delete(content)
}

searchBoxTags.addEventListener('click', function(e) {
    if(e.target.classList.contains('fa-xmark'))
    {
        RemoveTag(e.target.parentElement)
    }
})

searchBtn.onkeydown = function(e) {
    if(e.key === 'Enter') {
        let content = e.target.value

        if(content === '')
            return 

        AddTag(content)

        e.target.value = ''
    }
}

removeAllBtn.onclick = function() {
    searchBoxTags.innerHTML = ''
    searchMap.clear()
}