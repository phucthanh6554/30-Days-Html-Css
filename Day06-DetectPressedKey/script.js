const keyNumber = document.getElementById('key-number')
const keyValue = document.getElementById('key-value')
const keyWhich = document.getElementById('key-which')
const keyCode = document.getElementById('key-code')

document.onkeydown = function(e) {
    keyValue.innerText = e.key;
    keyCode.innerText = e.code;
    keyWhich.innerText = e.keyCode
    keyNumber.innerText = e.keyCode
    if(e.code === 'Space')
        keyValue.innerText = 'Space'
}