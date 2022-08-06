let crntNum = '';
let prevNum = '';
let firstNum = '';
let total = '';
let op= '';


const crntDisNum = document.querySelector('.disVal');

const equal = document.querySelector('.equal');
equal.addEventListener('click',operate);

const funcBtns = document.querySelectorAll('.func');

const numBtns = document.querySelectorAll('.num');

numBtns.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        getNum(e.target.textContent);
    });
});

funcBtns.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        getFunc(e.target.textContent);
    });
});

function getFunc(func){
    if( total != ''){
        crntNum = total;
        total = '';
    }
    op=func;
    firstNum = crntNum;
    prevNum = crntNum + '' + op + '';
    crntNum = '';
    crntDisNum.textContent = prevNum;

}

function getNum(num){
    if(crntNum.length < 6){
        crntDisNum.textContent = prevNum;
        crntNum+=num;
        crntDisNum.textContent = prevNum + crntNum;
    }
}

const add = function(num1, num2) {
    total = num1 + num2;
    crntDisNum.textContent = total;
};

const subtract = function(num1, num2) {
    total=  num1 - num2;
    crntDisNum.textContent = total;
};

const multiply = function(num1, num2) {
    total=  num1 * num2;
    crntDisNum.textContent = total;
  };
  
  const divide = function(num1, num2) {
    if(num1 === 0 || num2 === 0 ){
        zeroOut();
        crntDisNum.textContent = 'To infinity & beyond!!';
    } else {total=  Math.round((num1 / num2)*10)/10;
    crntDisNum.textContent = total;
}
  };


  function operate(num1,num2){
    num1= Number(firstNum);
    num2= Number(crntNum);
    if (op === '+'){
        add(num1, num2);
    } else if (op === '-'){
        subtract(num1, num2);
    } else if (op === '*'){
        multiply(num1, num2);
    } else if(op === '/') {
        divide(num1, num2);
    }else {
        return 'error';
        
    }
  };

  const zeroOut= function(){
    crntNum = '';
    prevNum = '';
    firstNum = '';
    total = '';    
    op = '';
    crntDisNum.textContent = '';

}

const clear = document.querySelector('.ac');
clear.addEventListener('click',zeroOut);
  