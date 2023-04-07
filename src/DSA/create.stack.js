class stack {
    constructor ()  {
    this.count = 0;
    this.storage = {};
    }
        //function to add values to stack
        push(value) {
            this.storage[this.count] = value;
            this.count++;
        }

        pop() {
            if (this.count === 0 ){
                return undefined;
            }

            this.count --;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }

        size() {
            return this.count;
        }

        peek() {
            let value = this.storage[this.count - 1]
            return value;
        }
}


let myStack = new stack();

myStack.push(4);
myStack.push(6);
myStack.push(5);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek()); 