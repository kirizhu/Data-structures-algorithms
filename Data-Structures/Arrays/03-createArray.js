//Arrays in JavaScript are just objects with integer based keys that act like indexes.
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
    return this.data[this.length - 1];
  }
  deleteAtIndex(index) {
    this.shiftItems(index);
    //[2,2] --->[2]
    delete this.data[this.length - 1];
    this.length--;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      //[0,2] --->[2,2]
      this.data[i] = this.data[i + 1];
    }
  }
}
const newArray = new MyArray();
newArray.push('hi');
newArray.push('how');
newArray.push('are');
newArray.push('you');
console.log(newArray.pop());
newArray.pop();
newArray.deleteAtIndex(0);
console.log(newArray);
