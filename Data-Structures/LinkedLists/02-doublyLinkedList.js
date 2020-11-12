class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const followingNode = prevNode.next;

    prevNode.next = newNode;
    newNode.next = followingNode;
    newNode.prev = prevNode;
    followingNode.prev = newNode;

    this.length++;
  }
  remove(index) {
    //check input
    let prevNode = this.traverseToPrev(index);
    let nodeToRemove = prevNode.next;
    prevNode.next = nodeToRemove.next;
    this.length--;
  }
}
/**
 * Single vs Double ?
 * Single = Fast insertion and deletion less memory. Cannot be traversed from back to front.
 *
 * Double = Better for searching, can be traversed from both sides. Fairly complex, more memory
 *
 * Pros: Fast insertion/deletion, ordered, flexible size.
 * Cons: Slow lookup, more memory.
 */
