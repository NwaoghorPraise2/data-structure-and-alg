

let stack = []; //This is the stack where we would store data 

let word = 'Praise'; 

let reWord = '';

// Add word to the stack
for(let i=0; i < word.length; i++){
    stack.push(word[i]);
    console.log(stack);
};

//Remove word from stack
for(let i = 0; i < word.length; i++){
    reWord += stack.pop(i)
    console.log(reWord);
};

// check if it is a paradrom

if (word === reWord) {
    console.log(`${reWord} is a Paradrom`)
} else {
    console.log(`${reWord} is not Paradrom`)
}