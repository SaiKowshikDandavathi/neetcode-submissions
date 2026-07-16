class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let value;
        let firstValue;
        let secondValue;

        for (const token of tokens){
            console.log(stack)

            switch(true){
                case (!isNaN(token)):
                    stack.push(Number(token));
                    break;
                case (token === "+"):
                    value = stack.pop() + stack.pop();
                    stack.push(value);
                    break; 
                case (token === "-"):
                    firstValue = stack.pop();
                    secondValue = stack.pop();
                    value = secondValue - firstValue;
                    stack.push(value);
                    break; 
                case (token === "*"):
                    value = stack.pop() * stack.pop();
                    stack.push(value);
                    break; 
                case (token === "/"):
                    firstValue = stack.pop();
                    secondValue = stack.pop();
                    value = Math.trunc(secondValue/firstValue);
                    stack.push(value);
                    break; 
            }
        }
        return stack.pop();
    }
}
