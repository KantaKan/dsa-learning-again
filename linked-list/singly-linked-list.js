class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node("hi");

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Naode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
  }
}
