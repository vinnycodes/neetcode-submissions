class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let res = [];

        for (let i = 0; i < arr.length; i++) {
            res.push(Math.max(...arr.slice(i + 1)));
        }

        res[res.length - 1] = -1;

        return res;
    }
}
