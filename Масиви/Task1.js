function findMaxConsecutiveOnes(nums) {
    function countOnesInRange(start, end) {
        if (start > end) {
            return 0;
        }

        const mid = Math.floor((start + end) / 2);
        const leftCount = countOnesInRange(start, mid - 1);
        const rightCount = countOnesInRange(mid + 1, end);

        if (nums[mid] === 1) {
            return leftCount + rightCount + 1;
        } else {
            return Math.max(leftCount, rightCount);
        }
    }

    return countOnesInRange(0, nums.length - 1);
}

// використання:
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Output: 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // Output: 2
