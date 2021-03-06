const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal-key');
const allClear = document.querySelector('.ac');
let display = document.querySelector('.display')
let firstNum = 0;
let secondNum = 0;
let resultNum = '';
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
        resultNum = firstNum * secondNum
    }
    if(currentOperand == 'divide'){
        resultNum = firstNum / secondNum
        
    }
    if(currentOperand == 'subtract'){
        resultNum = firstNum - secondNum
    }
    if(currentOperand == 'add'){
        resultNum = parseFloat(firstNum) + parseFloat(secondNum)
    }
    
    display.innerText = resultNum.toString().slice(0,9);
    secondContinue = true;
})




    




