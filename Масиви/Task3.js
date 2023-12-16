function sortedSquares(nums) {
    function square(num) {
        return num * num;
    }

    function merge(left, right) {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    const squaredNums = nums.map(square);
    return mergeSort(squaredNums);
}

//використання:
console.log(sortedSquares([-4, -1, 0, 3, 10])); // Output: [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // Output: [4, 9, 9, 49, 121]
