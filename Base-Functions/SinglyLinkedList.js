/**
 * Write a class of SinglyLinkedList with methods push, pop, shift, unshift, get, set, insert, reverse
 */

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        const node = new Node(val);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        } else {
            const oldTail = this.tail;
            oldTail.next = node;
            this.tail = node;
        }
        this.length++;
        return this.head;
    }
    pop(){
        if(this.length === 0) return false;
        let removedNode;
        if (this.length === 1){
            removedNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            let curNode = this.head;
            let prev = null;
            while (curNode.next) {
                prev = curNode;
                curNode = curNode.next;
            }
            removedNode = this.tail;
            this.tail = prev;
            prev.next = null;
        }
        this.length--;
        return removedNode;
    }
    shift(){
        if(this.length === 0) return false;
        if(this.length === 1) return !!this.pop();
        let removedNode = this.head;
        this.head = this.head.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }
    unshift(val){
        if(!val) return false;
        if(this.length === 0) return this.push(val);
        const node = new Node(val);
        const oldHead = this.head;
        node.next = oldHead;
        this.head = node;
        this.length++;
        return this.head;
    }
    get(index){
        if(!index || index > this.length || index < 1) return false;
        if(index === 1) return this.head;
        if(index === this.length) return this.tail;
        let curNode = this.head;
        let count = 1;
        while( count !== index){
            curNode = curNode.next;
            count++;
        }
        return curNode;
    }
    set(val, index){
        if(!index || index > this.length || index < 1) return false;
        let valAtIndex = this.get(index);
        valAtIndex.val = val;
        return true;
    }
    insert(val,index){
        if(index < 1 || index > this.length + 1) return false;
        if(index === this.length + 1) return this.push(val);
        if(index === 1) return this.unshift(val);
        let valAtIndex = this.get(index);
        let preIndex = this.get(index-1);
        const node = new Node(val);
        preIndex.next = node;
        node.next = valAtIndex;
        this.length++;
        return this.head;
    }
    remove(index){
        if(index < 1 || index > this.length) return false
        if(index === this.length) return this.pop();
        if(index === 1) return this.shift();
        let preIndex = this.get(index - 1);
        let valueAtIndex = this.get(index);
        preIndex.next = valueAtIndex.next;
        valueAtIndex.next = null
        this.length--
        return valueAtIndex;
    }
    reverse(){

        /*
        * assign a new variable to head
        * assign tail to be new head
        * Take 2 variables next and prev
        * next --> To move forward in the loop
        * prev --> store previous node value and assign it as new variable next
        *
        */
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev, next;

        while(node.next){
            next = node.next;
            node.next = prev || null;
            prev = node
            node = next
        }
        return this
    }
}

const list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
console.log(list.unshift("0"));

// console.log(list.get(1))
// console.log(list.get(2))
// console.log(list.get(3))
// console.log(list.get(4))
// console.log(list.set("newHead", 1));
// console.log(list.set("newtail", 4));
// console.log(list.set("newNext", 2));
console.log(list);

console.log(list.insert("newNext", 4));
console.log(list);

console.log(list.insert("newNext2", 6));

// console.log(list.get(5))

// console.log("pre reverse", list)
// list.reverse()
// console.log("post reverse", list)

// console.log(list.remove(4));

console.log(list);
