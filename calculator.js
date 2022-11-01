let display = document.querySelector(".display");
let btnClear = document.querySelector(".clear");
let btnDelete = document.querySelector(".delete");
let btnNum = document.querySelectorAll(".num");
let btnOp = document.querySelectorAll(".op");
let btnEq = document.querySelector(".equal");
let allBtn = document.querySelectorAll("button");
let clearScreenOnce = 0;
let chosenOp = equation = "";


function add(n1, n2)
{
    return (n1 + n2);
}

function sub(n1, n2)
{
    return (n1 - n2);
}

function div(n1, n2)
{
    if (n1 == 0 || n2 == 0)
        return ("wtf bro");
    else
        return (n1 / n2);
}

function mult(n1, n2)
{
    return (n1 * n2);
}

function clearAll()
{
    display.textContent = "";
    chosenOp = "";
    equation = "";
    clearScreenOnce = 0;
}

function deleteString()
{
    if (display.textContent === "OVERFLOW")
        clearAll();
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    equation = equation.slice(0, equation.length - 1);
}

function selectOperation()
{

    if (equation.includes("+") || equation.includes("-")
        || equation.includes("/") || equation.includes("x"))
        operate();

    if (this.textContent == "+")
        chosenOp = "+";
    if (this.textContent == "-")
        chosenOp = "-";
    if (this.textContent == "x")
        chosenOp = "x";
    if (this.textContent == "/")
        chosenOp = "/";

    display.textContent += chosenOp;
    equation += chosenOp;
    clearScreenOnce = 1;
}

function writeDisplay()
{
    if (clearScreenOnce){
        display.textContent = "";
        clearScreenOnce = 0;
    }

    if (display.textContent.length >= 11 || display.textContent === "OVERFLOW")
    {
        display.textContent = "OVERFLOW";
        equation = "";
    }
    else{
        if (this.textContent == "." && display.textContent.includes("."))
            return ;
        display.textContent += this.textContent;
        equation += this.textContent;
    }
}

function operate()
{
    if (!chosenOp || !equation)
        return ;

    equation = equation.split(chosenOp);
    n1 = Number(equation[0]);
    n2 = Number(equation[1]);

    switch(chosenOp){
        case "+":
            equation = add(n1, n2);
            break;
        case "-":
            equation = sub(n1, n2);
            break;
        case "/":
            equation = div(n1, n2);
            break;
        case "x":
            equation = mult(n1, n2);
            break;
        default:
            break;
    }

    // if result exceeds char limit of 14, round up
    if (equation.toString().length >= 14 && typeof equation == "number")
        equation = equation.toFixed(4);
    else
        equation = String(equation);

    chosenOp = "";
    display.textContent = equation;
    clearScreenOnce = 1;
}

function main()
{
    btnNum.forEach( (el) => el.addEventListener("click", writeDisplay) );
    btnOp.forEach( (el) => el.addEventListener("click", selectOperation) );
    btnEq.addEventListener("click", operate);
    btnClear.addEventListener("click", clearAll);
    btnDelete.addEventListener("click", deleteString);

    const borderAttr = document.createAttribute("style");
    const backgroundAttr = document.createAttribute("style");
    borderAttr.value = "border: 1px solid #b08efe";
    backgroundAttr.value = "background-color: #b08efe";

    // general styling events
    allBtn.forEach( (el) => el.addEventListener("mouseenter", function (){
        this.setAttributeNode(borderAttr);
    }))

    allBtn.forEach( (el) => el.addEventListener("mouseleave", function(){
        this.removeAttributeNode(borderAttr);
    }))

    allBtn.forEach( (el) => el.addEventListener("mousedown", function(e) {
        this.setAttributeNode(backgroundAttr);
    }))

    allBtn.forEach( (el) => el.addEventListener("mouseup", function(){
        this.removeAttributeNode(backgroundAttr);
    }))
}

main();