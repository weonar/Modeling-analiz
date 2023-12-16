function evalRPN(tokens) {
    const stack = [];
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(parseInt(token));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        if (token === '+') {
          stack.push(operand1 + operand2);
        } else if (token === '-') {
          stack.push(operand1 - operand2);
        } else if (token === '*') {
          stack.push(operand1 * operand2);
        } else if (token === '/') {
          stack.push(Math.trunc(operand1 / operand2));
        }
      }
    }
  
    return stack.pop();
  }
  
  // Приклад 1
  console.log(evalRPN(["2","1","+","3","*"])); // Виведе: 9
  
  // Приклад 2
  console.log(evalRPN(["4","13","5","/","+"])); // Виведе: 6
  
  // Приклад 3
  console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // Виведе: 22
  