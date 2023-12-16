function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let uniqueIndex = 0;

    for (let index = 1; index < nums.length; index++) {
        if (nums[index] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[index];
        }
    }

    nums.length = uniqueIndex + 1;

    return nums.length;
}

//використання:
const nums1 = [1, 1, 2];
const result1 = removeDuplicates(nums1);
console.log(result1, nums1); // Output: 2, [1, 2]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result2 = removeDuplicates(nums2);
console.log(result2, nums2); // Output: 5, [0, 1, 2, 3, 4]
