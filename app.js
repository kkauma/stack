// Creating a stack with an array
// Stack - LIFO

// const stack = [];

// stack.push("google");
// stack.push("instagram");
// stack.push("youtube");
// console.log(stack);
// stack.pop();
// stack.unshift("amazon");
// stack.unshift("twitter");
// stack.unshift("facebook");
// console.log(stack);
// stack.shift();
// console.log(stack);

// shift and unshift require re-indexing, not very efficient
// from a Big O perspective - O(n)

/**************************************/
/*** Stack w/ a Singly Linked List ***/
/************************************/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();
stack.push(7);
stack.push(9);
stack.push(17);
stack.push(19);
console.log(stack);
// stack.pop();
// stack.pop();
// console.log(stack);
