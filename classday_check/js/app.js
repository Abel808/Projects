/* pseudo code----------------
// 1- check button
// 2- input filed
// 3- title class day checker

1-input 
 a-lowercase
  b- if not string retry
  c- enter event listner
  prevent default 
  clear inputfield



2-logic
    a- tue & thur = class
    b - sat & sun = weekend
    c- mon,wed,fri = selflearn

    create arrays for each constant ie class, weekend, sellear
    and variable for the input
    push input to day array
*/


//cahced elements ------------

let inputEl = document.querySelector('#inpt')
let btnEl = document.querySelector('.btn')
let msgEl = document.querySelector('#msg')

// event listner
btnEl.addEventListener('click', handleSubmit )

//constants
const classDay = ['tuesday', 'thursday']
const weekend = ['saturday', 'sunday']
const selflearn = ['monday', 'wednesday', 'friday']

// variables
let day = [] 

//functtions------------------

function handleSubmit(e){

    e.preventDefault()
    errorCheck()
    logic ()
    reset()
}


function errorCheck(){
    
    let input = inputEl.value
    

    if(typeof input !== 'string'){
        msgEl.textContent= 'error'
       //dosent work, input value is saved as string
    }
} 

function logic(){

    day.push( inputEl.value.toLowerCase())

    if(day.some(val=>classDay.includes(val))){
        msgEl.textContent= "its class day"
        
    }
    else if(day.some(val=>weekend.includes(val))){
        msgEl.textContent= "its weekend"
        
    }
    else if(day.some(val=>selflearn.includes(val))){
        msgEl.textContent= "its Learning day"
        
    }

}


function reset(){
    day = []
    inputEl.value=''
} 

// ---------------------------