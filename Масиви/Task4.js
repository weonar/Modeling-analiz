function duplicateZeros(arr) {
    function shiftRight(startIndex) {
        for (let i = arr.length - 1; i > startIndex; i--) {
            arr[i] = arr[i - 1];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            shiftRight(i);
            i++; // пропуск щоб не було дублювання
        }
    }
}

//використання:
const arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1); // Output: [1, 0, 0, 2, 3, 0, 0, 4]

const arr2 = [1, 2, 3];
duplicateZeros(arr2);
console.log(arr2); // Output: [1, 2, 3]
