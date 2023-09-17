const range = document.getElementById('range')
const slider = document.getElementById('range-slider')
const container = document.getElementById('container')

range.onmousemove = function(e) {
    let percentWidth = Math.round((e.offsetX / range.offsetWidth) * 100) 

    slider.style.width = percentWidth + '%'
    slider.innerText = percentWidth + '%'

    let backgroundColor = `rgba(20, 20, 20, ${percentWidth / 100})`
    container.style.backgroundColor = backgroundColor
}