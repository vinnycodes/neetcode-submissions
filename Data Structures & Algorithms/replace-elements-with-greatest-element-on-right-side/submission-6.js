class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        const greats = []

        for(let i = 0; i < arr.length; i++){
            greats.push(Math.max(...arr.slice(i+1)))
        }

        greats.pop()
        greats.push(-1);

        return greats
    }
}
