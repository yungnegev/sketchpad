// variables

body = document.body
let color = 'black'
let click = false





// creating the canvass

function createCanvass(size){

    let canvass = document.querySelector(".canvass")

    //creating a template
    canvass.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvass.style.gridTemplateRows = `repeat(${size}, 1fr)`

    //inserting the divs
    let numCells = size * size 

    for(let i = 0; i < numCells; i++){
        let cell = document.createElement("div")

        cell.addEventListener('mouseover', colorCell)
        canvass.insertAdjacentElement('beforeend', cell)
    }
}

// getting canvas size

function getSize(){
    let input = prompt("Board size: ")
    let message = document.querySelector("#msg-container")

    if(input == ""){
        message.innerText = "Please provide a number"
    }
    else if(input < 0 || input > 100){
        message.innerText = "Provide a number between 1 and 100"
    }
    else{
        message.innerText = "Draw on the canvas!" 
        return input
    }
}


// color selector

function colorCell(){
    if(click){
        if (color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`   // gives random hsl value
        }else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice
}

let btnBlack = document.querySelector('#black-btn')
let btnRandom = document.querySelector('#random-btn')
let btnClear = document.querySelector('#clear-btn')

btnBlack.addEventListener('click', () => setColor('black'))
btnRandom.addEventListener('click', () => setColor('random'))
btnClear.addEventListener('click', () => createCanvass(20)) 



// launch

// default
createCanvass(16)

// specified
let size_btn = document.querySelector("#size-btn")
size_btn.addEventListener('click', () =>{
    let size = getSize()
    console.log(size)
    createCanvass(size)
})


// disabling click

body.addEventListener('click', (e) =>{
    if(e.target.tagName != 'BUTTON'){
        click =  !click
        let drawMsg = document.querySelector('#msg-draw')
        if(click){
            drawMsg.innerText = 'Draw enabled.'
        }else{
            drawMsg.innerText = 'Draw disabled.'
        }
    }
})