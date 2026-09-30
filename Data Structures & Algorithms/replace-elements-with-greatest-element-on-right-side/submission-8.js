class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {

        let greatRights = [];

        for(let i = 0; i < arr.length; i++){
            greatRights.push(
                Math.max(
                    ...arr.slice((i+1))
                )
            )
        }

        greatRights[greatRights.length - 1] = -1

        return greatRights

    }
}
