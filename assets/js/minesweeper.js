const grid = document.querySelector('.ms__grid')
let width = 10
let bombAmount = 20
let squares = []

//create Board
function createBoard() {
    //get shuffled game array with random bombs
    const bombArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('valid') 

    //join both arrays
    const gameArray = emptyArray.concat(bombArray)

    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    for(let i=0; i < width*width; i++){
        const square = document.createElement('div')
        //create 100 divs
        square.setAttribute('id', i)
        //will give each div an attribute(id) of i (i.e.0-99)
        square.classList.add(shuffledArray[i])
        grid.appendChild(square)
        squares.push(square)        
    }
}

createBoard()