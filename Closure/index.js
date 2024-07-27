//understanding closures

//write a function that returns another function where the inner funtction accesses a variable from the outer function scope . Call the inner function and log the result . 

function outerFunction() {
    let outerVariable = "I am the outer variable";
    return function innerFunction() {
        console.log(outerVariable);
    }
}

let innerFunction = outerFunction();
innerFunction(); //I am the outer variable

//create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter 

function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCurrentValue: function () {
            return count;
        }
    }
}

let counter1 = counter();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getCurrentValue()); //3


//Practical Closures

//write a function that generates unique ids. Use a closure to keep track of the last id generated and increment it to generate a new id.

function uniqueId() {
    let id = 0;
    return function () {
        return id++;
    }
}

let generateId = uniqueId();
console.log(generateId()); //0
console.log(generateId()); //1
console.log(generateId()); //2
console.log(generateId()); //3

//Create a closure that captures a users name and returns a function that greets the user by name 

function greetUser(name) {
    return function () {
        console.log(`Hello ${name}`);
    }
}

let greetJohn = greetUser("John");
greetJohn(); //Hello John

let greetJane = greetUser("Jane");
greetJane(); //Hello Jane

