//Function declaration 
//write a function to check if a number is even or odd

function isEven(num) {

    if (num % 2 === 0) {

        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }

}
isEven(5)


//write a function to calculate the square of a number and return the reesult 


const calSquare = () => {
    let length = 5;
    let square = length * length;
    console.log("the sqaure =", square)

}
calSquare()

//function expression 

//write a function expression to find the maximum of two numbers and log the result

const maxNumber = () => {
    let a = 5;;
    let b = 6;
    if (a > b) {
        console.log("a is greater than b")
    }
    else {
        console.log("b is greater than a")
    }
}
maxNumber()

//write a function expression to concatenate two string and return the result
// Function to concatenate two strings


function concatenateStrings(string1, string2) {
    return string1 + string2;
}

// Example usage
let str1 = "Hello, ";
let str2 = "world!";
let result = concatenateStrings(str1, str2);

console.log(result); // Output: Hello, world!

//write a function expression to add two numbers and return the result
// Function to add two numbers

function addNumbers(num1, num2) {
    return num1 + num2;
}


const beautiful=(username)=>{
    console.log("Beautiful place and photography by ",username)
}
beautiful("hitesth sir")



