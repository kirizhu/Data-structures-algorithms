// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
  traverseToPrev(index) {
    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    return prevNode;
  }
  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);

    const newNode = new Node(value);
    let prevNode = this.traverseToPrev(index);

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }
  remove(index) {
    //check input
    let prevNode = this.traverseToPrev(index);
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.length--;
  }
  reverse() {
    if (!this.head.next) {
      return this;
    }
    //[1,2,3,4]
    let current = this.head; //1
    this.tail = this.head;
    let second = current.next; //2
    while (second) {
      const temp = second.next; //3
      second.next = current; // point the second to 1
      current = second; // store 2 as the current
      second = temp; // make the second store 3
    }
    this.head.next = null; //1 points to null
    this.head = current; //
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(5);
myLinkedList.prepend(4);
myLinkedList.insert(3, 100);
myLinkedList.insert(4, 101);
myLinkedList.reverse();
myLinkedList.printList();
