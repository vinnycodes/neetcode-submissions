class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let res = []
        for (let i = 0; i < arr.length; i++) {
            let rightArr = arr.slice(i + 1);

            res.push(Math.max(...rightArr))
        }

        res[res.length - 1] = -1

        return res
    }
}
