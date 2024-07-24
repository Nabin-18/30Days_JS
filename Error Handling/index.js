//Basic error handling with try-catcg 

//write a function that intentionally throws an error and use a try-catch block to handle the error to the console 

const throwError = () => {
    try {
        throw new Error('This is an error');
    } catch (error) {
        console.log(error);
    }

}
throwError(); //this will throw an error

//create a function that divide two numbers and throws an error if the denominator is zero. Use a try-catch block to handle the error to the console

const divide = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error('Denominator cannot be zero');
        }
        return num1 / num2;
    } catch (error) {
        console.log(error);
    }
}

//finally block 

//write a script that includes a try-catch block and finally block . Log message in the try,catch and finally block

try {
    console.log('This is a try block');
    throw new Error('This is an error');
}
catch (error) {
    console.log('This is a catch block');
    console.log(error);
}
finally {
    console.log('This is a finally block');
}

//error handling in promises

//create a promise that randomly resolves or rejects . use .catch( ) to handle the error and log the error to the console

const promise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
        resolve('Success');
    } else {
        reject('Error');
    }
}
);

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}
);

//use try-catch within an async function to handle errors in the promise that randomly resolves or rejects

const asyncFunction = async () => {
    try {
        const message = await promise;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

asyncFunction(); //this will log either 'Success' or 'Error' to the console

//use the fetch api to request data from an invalid url and handel the error using .catch() method and log the error to the console


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));

//use try-catch within an async function to handle errors in the fetch api request and log the error to the console

const fetchData = async () => {
    try {
        const response = await fetch('https://json  placeholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    }
    catch (error) {
        console.log(error);
    }
}

fetchData(); //this will log the error to the console