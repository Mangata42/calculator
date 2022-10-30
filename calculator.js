let display = document.querySelector(".display");
let btnClear = document.querySelector(".clear");
let btnDelete = document.querySelector(".delete");
let btnNum = document.querySelectorAll(".num");
let btnOp = document.querySelectorAll(".op");
let clearScreenOnce = 0;
let chosenOp = "";
let n1 = n2 = "";

function clearAll(){
    display.textContent = "";
    n1 = n2 = chosenOp = "";
    clearScreenOnce = 0;
    btnOp.forEach( (el) => el.style.backgroundColor = "#03213f")
}

function deleteString(){
    if (display.textContent === "OVERFLOW")
        clearAll();
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
}

function selectOperation()
{
    this.style.backgroundColor = "red";

    if (this.textContent == "+")
        chosenOp = "+";
    if (this.textContent == "-")
        chosenOp = "-";
    if (this.textContent == "*")
        chosenOp = "*";
    if (this.textContent == "/")
        chosenOp = "/";

    if (n1.length > 0)
    {
        n2 = display.textContent;
        operate();
    }

    if (n1.length == 0){
        n1 = display.textContent;
        clearScreenOnce = 1;
    }
}

function writeDisplay()
{
    btnOp.forEach( (el) => el.style.backgroundColor = "#03213f")

    if (clearScreenOnce){
        display.textContent = "";
        clearScreenOnce = 0;
    }
    if (display.textContent.length >= 14 || display.textContent === "OVERFLOW")
        display.textContent = "OVERFLOW";
    else
        display.textContent += this.textContent;

}

function add(n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);
    return (n1 + n2);
}

function sub(n1, n2){
    return (n1 - n2);
}

function div(n1, n2){
    return (n1 / n2);
}

function mult(n1, n2){
    return (n1 * n2);
}

function operate(){
    console.log("operate!");

    if (chosenOp == "+"){
        n1 = String(add(n1, n2));
        n2 = "";
        display.textContent = n1;
    }
    clearScreenOnce = 1;
}

function main(){

    btnNum.forEach( (el) => el.addEventListener("click", writeDisplay) );
    btnOp.forEach( (el) => el.addEventListener("click", selectOperation) );
    btnClear.addEventListener("click", clearAll);
    btnDelete.addEventListener("click", deleteString);
}

main();