function merge(nums1, m, nums2, n) {
    function mergeSortedArrays(index1, index2, mergedIndex) {
        if (index1 >= m) {
            // Якщо nums1 вичерпано копіювання решти елементів із nums2
            for (let i = index2; i < n; i++) {
                nums1[mergedIndex] = nums2[i];
                mergedIndex++;
            }
            return;
        }

        if (index2 >= n) {
            // Якщо nums2 вичерпано нічого не робить
            return;
        }

        if (nums1[index1] <= nums2[index2]) {
            // Копіювати елемент із nums1 до об’єднаного масиву
            nums1[mergedIndex] = nums1[index1];
            mergeSortedArrays(index1 + 1, index2, mergedIndex + 1);
        } else {
            // Копіювати елемент із nums2 до об’єднаного масиву
            nums1[mergedIndex] = nums2[index2];
            mergeSortedArrays(index1, index2 + 1, mergedIndex + 1);
        }
    }

    mergeSortedArrays(0, 0, 0);
}

//використання:
const nums1_1 = [1, 2, 3, 0, 0, 0];
const nums2_1 = [2, 5, 6];
merge(nums1_1, 3, nums2_1, 3);
console.log(nums1_1); // Output: [1, 2, 2, 3, 5, 6]

const nums1_2 = [1];
const nums2_2 = [];
merge(nums1_2, 1, nums2_2, 0);
console.log(nums1_2); // Output: [1]

const nums1_3 = [0];
const nums2_3 = [1];
merge(nums1_3, 0, nums2_3, 1);
console.log(nums1_3); // Output: [1]
