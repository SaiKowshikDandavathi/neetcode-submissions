class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let data = this.keyStore.get(key) || [];
        data.push([timestamp, value])
        this.keyStore.set(key,data);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.get(key) || [];
        let left = 0;
        let right = data.length - 1;
        let result = '';

        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(data[mid][0] <= timestamp){
                result = data[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } 
        return result;
    }
}
