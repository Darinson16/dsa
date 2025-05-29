class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}

const stack = new Stack(10);
stack.push(4);
stack.push(40);
stack.push(2);
stack.push(3);
stack.push(8);
stack.push(6);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());

console.log(stack);
