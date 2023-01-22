

// ------------------------ string adder------------------- 30 mins
// cached
let inp1EL = document.querySelector("#inp1")
let inp2EL = document.querySelector("#inp2")
let inp3EL = document.querySelector("#inp3")

let btnEl = document.querySelectorAll(".btn")

console.log(inp1EL)
//event listeners
btnEl.forEach(btn=> btn.addEventListener('click', handleclick))

//create elements
let msgEl = document.createElement('p')
document.querySelector("h1").append(msgEl)


//variables
let input1
let input2 
let input3 

//functions

function handleclick(){
    input1= inp1EL.value
    input2 = inp2EL.value
     input3 = inp3EL.value
    let attached = `${input1} ${input2} ${input3}`
    msgEl.innerText = attached
    reset()
}

function reset(){
    input1 = ''
    input2 = ''
    input3 = ''
    inp1EL.value=''
    inp2EL.value =''
    inp3EL.value =''
}

//----------------------------------------------------


//----------------------temp calcuclator---------------- 30mins
//cached
let calinpEl = document.querySelector("#calc")
let calcbtnEL = document.querySelector("#calcbtn")

//event listners
calcbtnEL.addEventListener("click", calcClick)

//create element
let calcmsgEl = document.createElement('p')
document.querySelector("#fer").append(calcmsgEl)

//variable
let celcious 

//functions
function calcClick(e){
    e.preventDefault()
    let farenheit = (9/5)*calinpEl.value + 32
    calcmsgEl.innerText = farenheit
    console.log(farenheit)
}

//--------------

//0---------- hide imge -20 mins

let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')

document.querySelector(".removeimg").append(img1,img2,img3)

img1.addEventListener('click', hide)
img2.addEventListener('click', hide)
img3.addEventListener("click", hide)



img1.setAttribute('src',"https://images.pexels.com/photos/7303342/pexels-photo-7303342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
img2.setAttribute('src',"https://images.pexels.com/photos/13230453/pexels-photo-13230453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )
img3.setAttribute('src',"https://images.pexels.com/photos/6633071/pexels-photo-6633071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" )


function hide(e)
{
    e.target.style.display = 'none'
}

// ----------------- show img of that name clicked - 1hr




let jim = document.querySelector('#jim1').addEventListener('click', showimg1)
let jimmy = document.querySelector('#jimmy2').addEventListener('click', showimg2)
let jarret = document.querySelector('#jarret3').addEventListener("click", showimg3)

let jimimgEL = document.querySelector('#jimimg')
let jimmyimgEL = document.querySelector('#jimmyimg')
let jarretimgEL = document.querySelector('#jarretimg')





function showimg1(){
    jimmyimgEL.classList.add('hide')
    jarretimgEL.classList.add('hide')
    jimimgEL.classList.add('hide')
    jimimgEL.classList.toggle ('hide')
    
}

function showimg2(){
    
    jimmyimgEL.classList.add('hide')
    jarretimgEL.classList.add('hide')
    jimimgEL.classList.add('hide')
    jimmyimgEL.classList.toggle ('hide')
    
}

function showimg3(){
    jimmyimgEL.classList.add('hide')
    jarretimgEL.classList.add('hide')
    jimimgEL.classList.add('hide')
    jarretimgEL.classList.toggle ('hide')
    
}