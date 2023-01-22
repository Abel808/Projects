/* 

1- create contianer divs 
    6 container in each row
    6 rows

    Generating hex
    run loop for 6 times and select a char each time 
    at the end you you should have a color add # before it

    how would you assign the color to each tile
    each time a color container is created invoke random color and assign the backcolor to it
    also add the has to the inner text

    */

//cached elements -----------------
let sectionEl = document.querySelector('section')
let tiles = document.querySelector('.tile')



 // constants----------
 const columns = 35
 const board = []
 
 //variables-----------
 
let colorchars = '0123456789ABCDEF'
let colorlength = 6

let color



 //functions-----------
 
    //colorgenerator
    function colorGenerator(){
        let coloridx = ''
        for(let i = 0; i < colorlength; i++){
        rnum = Math.floor(Math.random()*colorchars.length)
        coloridx += colorchars.substring(rnum,rnum+1)
        color = `#${coloridx}`
        } 
        
    }
     
    

    // ColorBoard   

        for(let c = 0; c <columns; c++){
           
            colorGenerator()
            let container = document.createElement('div')
            container.style.backgroundColor= color
            container.innerText= color
        
            sectionEl.append(container)
        }

      