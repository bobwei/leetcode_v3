/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
 let i = m - 1;
 let j = n - 1;
 let k = m + n - 1;
 while (i >= 0 && j >= 0) {
   if (nums1[i] >= nums2[j]) {
     nums1[k] = nums1[i];
     i -= 1;
   } else if (nums1[i] < nums2[j]) {
     nums1[k] = nums2[j];
     j -= 1;
   }
   k -= 1;
 }
 let nums;
 if (i >= 0) {
   nums = nums1;
 } else if (j >= 0) {
   nums = nums2;
 }
 while (k >= 0) {
   nums1[k] = nums[k];
   k -= 1;
 }
};

let nums1;
let nums2;
let m;
let n;
nums1 = [1, 3, 5, 10, 0, 0, 0, 0];
m = 4;
nums2 = [2, 6, 8, 9];
n = 4;
merge(nums1, m, nums2, n)
console.log(nums1);
nums1 = [5, 6, 7, 8, 0, 0, 0, 0];
m = 4;
nums2 = [1, 2, 3, 4];
n = 4;
merge(nums1, m, nums2, n)
console.log(nums1);
