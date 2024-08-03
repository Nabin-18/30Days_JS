//Understanding Promises and Async/Await in JavaScript

//create a promise that resolves  with a message after a 2 second timeout and log the message in console 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});

promise.then((message) => {
    console.log(message);
})

//create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch() method

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected');
    }, 2000);
})

promise1.catch((error) => {
    console.log(error);
})

//chaining promises

//create a sequence of promises that simulate fetching data from a server. Chain the promise to log message in a specifi order

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First Promise resolved');
    }, 2000);
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second Promise resolved');
    }, 2000);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third Promise resolved');
    }, 2000);
})

promise2.then((message) => {
    console.log(message);
    return promise3;
}).then((message) => {
    console.log(message);
    return promise4;
}).then((message) => {
    console.log(message);
})

//using async/await

//write an async function that waits a promise to resolve and logs the message in console

async function asyncFunction() {
    const message = await promise;
    console.log(message);
}

asyncFunction();

//write an async function that handels a rejected promise using try/catch block and logs the error message in console


async function asyncFunction1() {
    try {
        const message = await promise1;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

asyncFunction1();

//fetching data from an API using async/await

//use the fetch API to get data form an public API and log the responce data to the console using promise 

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data));

//use the fetch API to get data form an public API and log the responce data to the console using async/await

async function fetchData() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await responce.json();
    console.log(data);
}

fetchData();