class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    let base = this.items.length - 1;
    if (base === -1) {
      console.log("Stack is empty");
    } else {
      console.log("Stack is not empty");
    }
  }

  isFull() {
    let base = this.items.length - 1;
    let size = this.items.length;
    if (base !== -1 && size - base === 1) {
      console.log("Stack is full");
      return;
    } else {
      console.log("Stack is not full");
    }
  }

  push(element) {
    let base = this.items.length - 1;
    let size = this.items.length;
    if (base !== -1 && size - base === 1) {
      console.log("Stack is full");
      return;
    } else {
      base = base + 1;
      this.items[size] = element;
      return console.log(this.items);
    }
  }

  pop() {
    let base = this.items.length - 1;
    let size = this.items.length;
    if (base === -1) {
      console.log("Stack is empty");
      return;
    } else {
      this.items.splice(size - 1, 1);
      return console.log(this.items);
    }
  }

  search(element) {
    let base = this.items.length - 1;
    let size = this.items.length;
    if (base === -1) {
      return console.log("Stack is empty");
    } else if (element === this.items[base]) {
      return console.log("element index ", base);
    } else if (element !== this.items[base]) {
      for (let i = 0; i < size; i++) {
        if (this.items[i] === element) {
          return console.log("element index ", i);
        }
      }
      return console.log("element not found");
    }
  }

  peek() {
    let base = this.items.length - 1;
    if (base === -1) {
      return console.log("Stack is empty");
    } else {
      return console.log(this.items[base]);
    }
  }

  clear() {
    return console.log((this.items = []));
  }
}

const stack = new Stack();
stack.isFull();
stack.isEmpty();
stack.push(2);
stack.pop();
stack.search(4);
stack.peek();
stack.clear();
