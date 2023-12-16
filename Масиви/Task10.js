function sortArrayByParity(nums) {
    let evenIndex = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        const temp = nums[i];
        nums[i] = nums[evenIndex];
        nums[evenIndex] = temp;
        evenIndex++;
      }
    }
  
    return nums;
  }
  
  // Приклади використання:
  console.log(sortArrayByParity([3, 1, 2, 4])); // Виведе: [2, 4, 3, 1]
  console.log(sortArrayByParity([0]));          // Виведе: [0]
  