function decodeString(s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';
  
    for (let char of s) {
      if (char >= '0' && char <= '9') {
        currentNum = currentNum * 10 + parseInt(char);
      } else if (char === '[') {
        stack.push({ num: currentNum, str: currentStr });
        currentNum = 0;
        currentStr = '';
      } else if (char === ']') {
        const { num, str } = stack.pop();
        currentStr = str + currentStr.repeat(num);
      } else {
        currentStr += char;
      }
    }
  
    return currentStr;
  }
  
  // Приклад 1
  console.log(decodeString("3[a]2[bc]")); // Виведе: "aaabcbc"
  
  // Приклад 2
  console.log(decodeString("3[a2[c]]")); // Виведе: "accaccacc"
  
  // Приклад 3
  console.log(decodeString("2[abc]3[cd]ef")); // Виведе: "abcabccdcdcdef"
  