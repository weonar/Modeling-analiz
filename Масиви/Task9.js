function replaceElements(arr) {
    const n = arr.length;
  
    // Ініціалізуємо максимальний елемент як -1 (для останнього елемента масиву)
    let maxRight = -1;
  
    // Обходимо масив з права наліво
    for (let i = n - 1; i >= 0; i--) {
      const currentElement = arr[i];
  
      // Замінюємо поточний елемент на максимальний елемент справа від нього
      arr[i] = maxRight;
  
      // Оновлюємо максимальний елемент для наступного ітерації
      maxRight = Math.max(maxRight, currentElement);
    }
  
    return arr;
  }
  
  //використання
  console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18, 6, 6, 6, 1, -1]
  console.log(replaceElements([400]));                // [-1]
  