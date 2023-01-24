/* pseudo code
when you press button color changes
add color to the container

have a set of colors to choose from 
randomize them on each click
attach random fun to btn */

// cached elements 

let colorBoxEL = document.getElementById('container1')
let btnEl = document.querySelector('#btn')

//event listner
btnEl.addEventListener('click', createDivs)

//variables 
const colors = [ 'cdb4db','ffc8dd',"ffafcc",'bde0fe','a2d2ff']
let inputBoxes = 20
let divHeight = (inputBoxes / 5)*72 + "px"
console.log(divHeight)
colorBoxEL.style.height= divHeight



// functions

 createDivs()




function createDivs(){
    reset()
    for (let i = 0; i < inputBoxes; i++){
        let div = document.createElement('div')
        div.classList.add('box')
        colorBoxEL.append(div)
        
        
        
        let colorIdx = Math.floor(Math.random()*colors.length)
        let finalColor = '#' + colors[colorIdx]
        div.style.backgroundColor=finalColor
        div.innerText = finalColor 
    
    }
}

function reset(){
    let removeDivs = document.querySelectorAll('.box')
    removeDivs.forEach((div)=>{
        div.remove()
    })

}