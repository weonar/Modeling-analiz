function longestValidParentheses(s) {
    const stack = [-1];
    let maxLen = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        stack.push(i);
      } else {
        stack.pop();
  
        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
        }
      }
    }
  
    return maxLen;
  }
  
  // Приклад 1
  console.log(longestValidParentheses("(()")); // Виведе: 2
  
  // Приклад 2
  console.log(longestValidParentheses(")()())")); // Виведе: 4
  
  // Приклад 3
  console.log(longestValidParentheses("")); // Виведе: 0
  