class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let lo = 0;
        let hi = nums.length - 1;

        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            let check = nums[mid];

            if (check === target) {
                return mid;
            } else if (check < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return -1;
    }
}
