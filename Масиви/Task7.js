function checkIfExist(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === 2 * arr[j]) {
                return true;
            }
        }
    }
    return false;
}

//використання:
const arr1 = [10, 2, 5, 3];
console.log(checkIfExist(arr1)); // Output: true

const arr2 = [3, 1, 7, 11];
console.log(checkIfExist(arr2)); // Output: false
