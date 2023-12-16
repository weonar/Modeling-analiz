function maxSlidingWindow(nums, k) {
    if (!nums || nums.length === 0) {
      return [];
    }
  
    const result = [];
    const maxQueue = [];
  
    for (let i = 0; i < nums.length; i++) {
      // Видаляємо елементи з черги, які виходять за межі поточного вікна
      while (maxQueue.length > 0 && maxQueue[0] < i - k + 1) {
        maxQueue.shift();
      }
  
      // Видаляємо менші елементи з кінця черги
      while (maxQueue.length > 0 && nums[maxQueue[maxQueue.length - 1]] < nums[i]) {
        maxQueue.pop();
      }
  
      // Додаємо поточний елемент до черги
      maxQueue.push(i);
  
      // Додаємо максимум поточного вікна до результату
      if (i >= k - 1) {
        result.push(nums[maxQueue[0]]);
      }
    }
  
    return result;
  }
  
  //використання
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Виведе: [3, 3, 5, 5, 6, 7]
  console.log(maxSlidingWindow([1], 1)); // Виведе: [1]
  