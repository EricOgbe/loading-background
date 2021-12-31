const pic = document.querySelector('.container')
const percent = document.querySelector('.percent')
let opas = 1;

let blur = 30
let num = 100
setInterval(() => {
    blur--;
    
pic.style.filter = `blur(${blur}px)`

},150)

setInterval(() => {
    num--;
    opas -= 0.01;

    if (num < 1) {
        num = 0;
    }
    percent.innerHTML = `${num}%`
    percent.style.opacity = `${opas}`
},40)