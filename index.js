console.log('helloo')
 
class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {

        return this.items.length == 0;
    }
    isFull() {
        return this.items.length == 10;
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    search(element) {
        for (let i = 0; i < this.items.length; i++)
            if (this.items[i] == element)
                return i;
        return -1;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    clear() {
        this.items = [];
    }

}