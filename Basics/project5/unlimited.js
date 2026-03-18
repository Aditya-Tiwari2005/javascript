// Generate random Colors
let randomColor = function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
console.log(randomColor());

let intervalID;
const startChanging=function(){
    if(intervalID==null){ 
        intervalID=setInterval(changeBgColor,1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}

const stopChanging=function(){
    clearInterval(intervalID)
    intervalID=null;//memory clean up

}

const startButton = document.querySelector('#start').addEventListener('click',startChanging)
const stopButton = document.querySelector('#stop').addEventListener('click',stopChanging)
const body = document.querySelector('#body')
