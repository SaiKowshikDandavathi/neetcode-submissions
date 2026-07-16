/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.values = []
    this.sum = 0
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    this.values.push(val)
    this.sum += val
    console.log(this.sum, this.values)
    if (this.values.length > this.size) {
        let value = this.values.shift()
        this.values = this.values.slice(0)
        console.log(this.values)
        this.sum = this.sum - value
    }
    return this.sum / this.values.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */