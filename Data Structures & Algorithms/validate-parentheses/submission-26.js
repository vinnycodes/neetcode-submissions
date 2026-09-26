class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Valid String Object
        const obj = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        const string = [];

        for (let i = 0; i < s.length; i++) {
            let curr = s[i];

            if (curr === "(" || curr === "{" || curr === "[") {
                string.push(curr);
            } else if (curr === obj[string[string.length - 1]]) {
                string.pop();
            } else {
                return false;
            }
        }

        return string.length > 0 ? false : true;
    }
}
