let display = document.querySelector(".display");
let btnClear = document.querySelector(".clear");
let btnDelete = document.querySelector(".delete");
let btnNum = document.querySelectorAll(".num");
let btnOp = document.querySelectorAll(".op");
let total = 0;

function clearDisplay(){
    display.textContent = "";
}

function deleteString(){
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function writeDisplay()
{
    display.textContent += this.innerText;
}

function main(){

    btnNum.forEach( (el) => el.addEventListener("click", writeDisplay) );
    btnClear.addEventListener("click", clearDisplay);
    btnDelete.addEventListener("click", deleteString);
}

main();