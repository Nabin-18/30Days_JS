//Understanding Local Storage

//write a script to save a string value to localStorage and retrive it .Log the retrived value to console.

localStorage.setItem('name', 'John Doe');
console.log(localStorage.getItem('name'));

//write a script to save a object value to localStorage and retrive it .Log the retrived value to console. 

localStorage.setItem('user', JSON.stringify(
    {
        name: 'John Doe',
        age: 30
    }
));
console.log(JSON.parse(localStorage.getItem('user')));


//Using Localstorage

//Create a simple form the saves input(eg.name and email) to localstorage on submitted. Retrive and display the saved data on page load 

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const output = document.querySelector('.output');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);
    nameInput.value = '';
    emailInput.value = '';
}
);

document.addEventListener('DOMContentLoaded', function () {
    output.innerHTML = `Name: ${localStorage.getItem('name')} <br> Email: ${localStorage.getItem('email')}`;
}
);

//Write a script to remove and item from localstorage. Log the localStorage to console before and after removing the item.

console.log(localStorage);
localStorage.removeItem('name');
console.log(localStorage);

//Understanding Session Storage

//write a script to save a string value to sessionStrorage and retrive it .Log the retrived value to console.

sessionStorage.setItem('name', 'John Doe');
console.log(sessionStorage.getItem('name'));

//write a script to save a object value to sessionStrorage and retrive it .Log the retrived value to console.

sessionStorage.setItem('user', JSON.stringify(
    {
        name: 'John Doe',
        age: 30
    }
));
console.log(JSON.parse(sessionStorage.getItem('user')));

//Using SessionStorage

//Create a simple form the saves input(eg.name and email) to sessionStorage on submitted. Retrive and display the saved data on page load

const form1 = document.querySelector('form1');
const nameInput1 = document.querySelector('#name1');
const emailInput1 = document.querySelector('#email1');
const output1 = document.querySelector('.output1');

form1.addEventListener('submit', function (e) {
    e.preventDefault();
    sessionStorage.setItem('name', nameInput1.value);
    sessionStorage.setItem('email', emailInput1.value);
    nameInput1.value = '';
    emailInput1.value = '';
}
);

document.addEventListener('DOMContentLoaded', function () {
    output1.innerHTML = `Name: ${sessionStorage.getItem('name')} <br> Email: ${sessionStorage.getItem('email')}`;
}
);

//Write a script to remove and item from sessionStorage. Log the sessionStorage to console before and after removing the item.

console.log(sessionStorage);
sessionStorage.removeItem('name');
console.log(sessionStorage);

//Comparing LocalStorage and SessionStorage

//Write a script to save a string value to localStorage and sessionStorage and retrive it .Log the retrived value to console.

localStorage.setItem('name', 'John Doe');
sessionStorage.setItem('name', 'John Doe');
console.log(localStorage.getItem('name'));
console.log(sessionStorage.getItem('name'));

//Write a script to save a object value to localStorage and sessionStorage and retrive it .Log the retrived value to console.

localStorage.setItem('user', JSON.stringify(
    {
        name: 'John Doe',
        age: 30
    }
));
sessionStorage.setItem('user', JSON.stringify(
    {
        name: 'John Doe',
        age: 30
    }
));
console.log(JSON.parse(localStorage.getItem('user')));

console.log(JSON.parse(sessionStorage.getItem('user')));

//Write a script to remove an item from localStorage and sessionStorage. Log the localStorage and sessionStorage to console before and after removing the item.

console.log(localStorage);
localStorage.removeItem('name');
console.log(localStorage);
