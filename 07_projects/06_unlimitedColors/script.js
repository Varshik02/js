// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId
const startChaingingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgcolor, 1000)
    }
    intervalId = setInterval(changeBgColor, 1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};


const stopChaingingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChaingingColor);

document.querySelector('#stop').addEventListener('click', stopChaingingColor);
    
    