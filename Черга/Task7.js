function constrainedSubsetSum(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    const deque = [];
    let result = nums[0];
  
    dp[0] = nums[0];
    deque.push([dp[0], 0]);
  
    for (let i = 1; i < n; i++) {
      // Видаляємо елементи, що вийшли за межі вікна k
      while (deque.length > 0 && i - deque[0][1] > k) {
        deque.shift();
      }
  
      // Обчислюємо dp[i] та враховуємо його у визначенні максимальної суми
      dp[i] = Math.max(nums[i], nums[i] + (deque.length > 0 ? deque[0][0] : 0));
      result = Math.max(result, dp[i]);
  
      // Додаємо поточний dp[i] у кінець черги, видаляючи менші елементи
      while (deque.length > 0 && dp[i] > deque[deque.length - 1][0]) {
        deque.pop();
      }
      deque.push([dp[i], i]);
    }
  
    return result;
  }
  
  // Приклади використання
  console.log(constrainedSubsetSum([10, 2, -10, 5, 20], 2)); // Виведе: 37
  console.log(constrainedSubsetSum([-1, -2, -3], 1)); // Виведе: -1
  console.log(constrainedSubsetSum([10, -2, -10, -5, 20], 2)); // Виведе: 23
  