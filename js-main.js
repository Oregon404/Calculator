const add = function(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const multiply = function(num1, num2) {
    return num1 * num2;
  };
  
  const divide = function(num1, num2) {
    return Math.round((num1 / num2)*10)/10;
  };

  function operate(num1,op, num2){
    console.log(op);
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