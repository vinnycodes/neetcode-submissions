class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        return this.stack
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        return this.stack
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.stack)
    }
}
