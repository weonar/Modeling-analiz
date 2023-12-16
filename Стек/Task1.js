function isValid(s) {
    const stack = [];
    const brackets = {
      '(': ')',
      '{': '}',
      '[': ']',
    };
  
    for (let i = 0; i < s.length; i++) {
      const currentChar = s.charAt(i);
  
      if (brackets[currentChar]) {
        // Якщо це відкрита дужка, додаємо в стек
        stack.push(currentChar);
      } else {
        // Якщо це закрита дужка
        const lastOpenBracket = stack.pop();
  
        // Перевіряємо відповідність відкритої і закритої дужки
        if (brackets[lastOpenBracket] !== currentChar) {
          return false;
        }
      }
    }
  
    // Перевіряємо, чи всі відкриті дужки були закриті
    return stack.length === 0;
  }
  
  // Приклад 1
  console.log(isValid("()")); // Виведе: true
  
  // Приклад 2
  console.log(isValid("()[]{}")); // Виведе: true
  
  // Приклад 3
  console.log(isValid("(]")); // Виведе: false
  