function findNumbers(nums) {
    function countDigits(num) {
        if (num === 0) {
            return 0;
        } else {
            return 1 + countDigits(Math.floor(num / 10));
        }
    }

    function isEven(num) {
        return num % 2 === 0;
    }

    function countNumbersWithEvenDigits(index) {
        if (index === nums.length) {
            return 0;
        } else {
            const digitCount = countDigits(nums[index]);
            const countRest = countNumbersWithEvenDigits(index + 1);

            if (isEven(digitCount)) {
                return 1 + countRest;
            } else {
                return countRest;
            }
        }
    }

    return countNumbersWithEvenDigits(0);
}

//використання:
console.log(findNumbers([12, 345, 2, 6, 7896])); // Output: 2
console.log(findNumbers([555, 901, 482, 1771]));  // Output: 1
