//Operators 

// 1. Arithmetic operators 

let a = 10;
let b = 5;

const sum = a + b;
console.log("The sum of two value is :", sum);

const diff = a - b;
console.log("The difference of two value is :", diff);

const mul = a * b;
console.log("The multiplication of two value is :", mul);

const div = a / b;
console.log("The division is :", div);

const rem = a % b;
console.log("The reminder is :", rem);


//2. Assignment Operators
const assignmentOperator = () => {
    let a = 5;
    a += 3;
    console.log(a);

    a -= 8;
    //here a is 8 and a-= 8 , so the difference become 0 
    console.log(a);
}
assignmentOperator()


//3.Comparision Operators 

function compareFunction() {

    let firstNumber = 10;
    let secondNumber = 5;

    if (firstNumber > secondNumber) {
        console.log("First Number is greater than second Number i.e.", `${firstNumber}`)
    }

    else {
        console.log("Second Number is greater than first Number i.e.", `${secondNumber}`)
    }

    console.log(firstNumber >= secondNumber)
    console.log(firstNumber <= secondNumber)

    console.log(firstNumber == secondNumber)
    // Checks if two values are equal 
    console.log(firstNumber === secondNumber)
    // Checks if two values are equal and of the same type

}
compareFunction()



//4.Logical operators

function logicalOperators() {
    let a = true;
    let b = false;
    let c = true;

    console.log(a && b);
    // false
    console.log(a && c);
    // true

    // Using in an if statement
    if (a && c) {
        console.log("Both a and c are true");
    } else {
        console.log("At least one of a or c is false");
    }

    function logicalOR() {
        let x = false;
        let y = true;
        let z = false;
        console.log(x || y)//true
        console.log(x || z) //false
    }
    logicalOR()

}
logicalOperators()

//Ternary operator

function terOp() {
    let user = "Nabin";
    let welocomeUser = (user === "Nabin") ? "Welcome to the coding hub" : "First learn code "
    console.log(welocomeUser)
}
terOp()






