const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal-key');
const allClear = document.querySelector('.ac');
let display = document.querySelector('.display')
let firstNum = 0;
let secondNum = 0;
let resultNum = undefined;
let currentOperand = 'none';
let secondContinue = false;

allClear.addEventListener('click', () => {
    display.innerText = ''
    currentOperand = undefined;
    firstNum = 0;
    secondNum = undefined;
});
    



numbers.forEach(num => {
    num.addEventListener('click', function(){

        display.innerText += num.innerText;
        if(secondContinue == true){
            display.innerText = '';
            display.innerText += num.innerText;
            secondContinue = false;
        } 
    })
})



operators.forEach(op => {
    op.addEventListener('click', function(){
        firstNum = display.innerText;
        display.innerText = ''
        if(op.dataset.action == 'multiply'){
            currentOperand = 'multiply'
        }
        if(op.dataset.action == 'divide'){
            currentOperand = 'divide'
        }
        if(op.dataset.action == 'subtract'){
            currentOperand = 'subtract'
        }
        if(op.dataset.action == 'add'){
            currentOperand = 'add'
        }
    })
})
    
equal.addEventListener('click', () =>{
    
    secondNum = display.innerText;
    //console.log(firstNum)
    //console.log(secondNum)
    if(currentOperand == 'multiply'){
        display.innerText = firstNum * secondNum
    }
    if(currentOperand == 'divide'){
        display.innerText = firstNum / secondNum
    }
    if(currentOperand == 'subtract'){
        display.innerText = firstNum - secondNum
    }
    if(currentOperand == 'add'){
        display.innerText = parseFloat(firstNum) + parseFloat(secondNum)
    }
    resultNum = display.innerText;
    secondContinue = true;
})




    




