class MinStack { 
    constructor() {
        this.values = [];
        this.minValues = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.values.push(val);
        this.minValues.push(
            this.minValues.length ? Math.min(this.minValues[this.minValues.length - 1], val) : val,
        );
    }

    /**
     * @return {void}
     */
    pop() {
        this.minValues.pop();
        this.values.pop()

    }

    /**
     * @return {number}
     */
    top() {
        return this.values[this.values.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValues[this.minValues.length -1]
    }
}