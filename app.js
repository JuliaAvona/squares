const board = document.querySelector('#board')
const colors = ['#FAFD72', '#FCA6D5', '#B4F6FD', '#72FD9C', '#8E9CFA']
const SQUARES_NUMBER = 500


for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
   element.style.boxShadow = `0 0 3px ${color}, 0 0 5px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 3px #000'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
