
let oneButton = document.getElementById("calc-one");
let twoButton = document.getElementById("calc-two");
let threeButton = document.getElementById("calc-three");
let fourButton = document.getElementById("calc-four");
let fiveButton = document.getElementById("calc-five");
let sixButton = document.getElementById("calc-six");
let sevenButton = document.getElementById("calc-seven");
let eightButton = document.getElementById("calc-eight");
let nineButton = document.getElementById("calc-nine");
let zeroButton = document.getElementById("calc-zero");

let divisionButton = document.getElementById("calc-division");
let multButton = document.getElementById("calc-mult");
let minusButton = document.getElementById("calc-minus");
let decimalButton = document.getElementById("calc-decimal");
let eraseButton = document.getElementById("calc-erase");
let plusButton = document.getElementById("calc-plus");
let calcDisplay = document.getElementById("calc-display");
let equalButton = document.getElementById("calc-equal");
let clearButton = document.getElementById("calc-clear");
let displayNum = "0";

if (displayNum === "0") {
  displayNum = "";
}

let calcFirst;
let calcTotal = [];


  
  

oneButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
  console.log(displayNum);
});

twoButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

threeButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

fourButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

fiveButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

sixButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

sevenButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

eightButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

nineButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});

zeroButton.addEventListener("click", function (event) {
  if (displayNum === "0") {
    displayNum = "";
  }
  displayNum += event.target.innerHTML;
  calcDisplay.innerHTML = displayNum;
});


decimalButton.addEventListener("click", function decimal() {
  
  let decimalCheck = displayNum.split('');
  function checkDecimal(decimalCheck) {
    let length = decimalCheck.length;
    for (let i = 0; i < length; i++) {
      if (decimalCheck[i] == ".") return true;
    }
    return false;
  }
  
  
if(checkDecimal(decimalCheck) === true){
decimalButton.removeEventListener('click', decimal())
}

  displayNum += ".";
  calcDisplay.innerHTML = displayNum;
});

clearButton.addEventListener("click", function () {
  displayNum = "0";
  let calcTotal = undefined;
  calcDisplay.innerHTML = displayNum;
  if (displayNum === "0") {
    displayNum = "";
    calcTotal = [];
  }
});

divisionButton.addEventListener("click", function () {
  if (divisionButton) {
    calcFirst = displayNum;
    displayNum = "0";
    calcTotal.push(calcFirst);
    calcTotal.push(" / ");
    displayNum = "0";
  }
  if (displayNum === "0") {
    displayNum = "";
  }
});

multButton.addEventListener("click", function () {
  if (multButton) {
    calcFirst = displayNum;
    displayNum = "0";
    calcTotal.push(calcFirst);
    calcTotal.push(" * ");
    displayNum = "0";
  }
  if (displayNum === "0") {
    displayNum = "";
  }
});

minusButton.addEventListener("click", function () {
  if (minusButton) {
    calcFirst = displayNum;
    displayNum = "0";
    calcTotal.push(calcFirst);
    calcTotal.push(" - ");
    displayNum = "0";
  }
  if (displayNum === "0") {
    displayNum = "";
  }
});

plusButton.addEventListener("click", function () {
  if (plusButton) {
    calcFirst = displayNum;
    displayNum = "0";
    calcTotal.push(calcFirst);
    calcTotal.push(" + ");
    displayNum = "0";
  }
  if (displayNum === "0") {
    displayNum = "";
  }
});

equalButton.addEventListener("click", function () {
  if (equalButton) {
    calcTotal.push(displayNum);
    let finalCalc = eval(calcTotal.join(""));
    console.log(calcTotal.join(""));
    calcDisplay.innerHTML = finalCalc;
    calcTotal = [];
    displayNum = finalCalc;
    calcFirst = displayNum.innerText;
  }
});

eraseButton.addEventListener("click", function () {
  if (eraseButton) {
    let displayLength = displayNum.length;
    displayNum = displayNum.slice(0, displayLength - 1);
    if (displayNum === "") {
      displayNum = "0";
    }

    calcDisplay.innerHTML = displayNum;
  }
});







