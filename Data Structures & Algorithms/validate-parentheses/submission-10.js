class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const valid = [];

        // Brackets Object
        const brax = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        // Loop
        for (let i = 0; i < s.length; i++) {
            const curr = s[i]
            if (curr === '(' || curr === '{' || curr === '[') {
                valid.push(s[i])
            } else {
                if (valid.length === 0) return false;

                if (brax[valid[valid.length - 1]] === curr) {
                    valid.pop()
                } else {
                    return false
                }
            }
        }

        // Return 
        return valid.length === 0 ? true : false
    }
}
