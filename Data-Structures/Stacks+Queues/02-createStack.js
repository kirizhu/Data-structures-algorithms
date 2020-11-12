class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    console.log(this.array[this.array.length - 1]);
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    console.log(this.array);
    return this.array;
  }
  pop() {
    this.array.pop;
    console.log(this.array);
    return this.array;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
