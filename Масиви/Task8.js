function validMountainArray(arr) {
    const n = arr.length;
    
    // Перевірка на мінімальну довжину гірського масиву
    if (n < 3) {
      return false;
    }
  
    // Знаходження піку гірського масиву
    let peakIndex = 0;
    while (peakIndex < n - 1 && arr[peakIndex] < arr[peakIndex + 1]) {
      peakIndex++;
    }
  
    // Перевірка, чи гірський масив починається та закінчується строгим зростанням і спаданням
    if (peakIndex === 0 || peakIndex === n - 1) {
      return false;
    }
  
    // Перевірка строгого спадання після піку
    while (peakIndex < n - 1 && arr[peakIndex] > arr[peakIndex + 1]) {
      peakIndex++;
    }
  
    // Якщо всі умови виконуються, то масив є дійсним гірським масивом
    return peakIndex === n - 1;
  }
  
  //використання
  console.log(validMountainArray([2, 1]));     // false
  console.log(validMountainArray([3, 5, 5]));   // false
  console.log(validMountainArray([0, 3, 2, 1])); // true
  