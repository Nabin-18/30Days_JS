//select a HTML element by id and change the text of it 

 const myElement = document.getElementById('myElement');
    myElement.textContent = 'Hello World';
    // or
    myElement.innerHTML = 'Hello World';


//select a HTML element by class and change the background color of it

const myElement = document.getElementsByClassName('myElement');
myElement.style.backgroundColor = 'red';

//create a new div element with text and append it to the body

const newElement = document.createElement('div');
newElement.textContent = 'Hello World';
document.body.appendChild(newElement);


//create a li element with text and append it to a ul element

const newElement = document.createElement('li');
newElement.textContent = 'Hello World';
document.querySelector('ul').appendChild(newElement);

//select and html element and remove it from the DOM

const element = document.getElementById('myElement');
element.remove();

//remove last children of a ul element

const ul = document.querySelector('ul');
ul.lastElementChild.remove();

//event listener for a button click

document.getElementById('myButton').addEventListener('click', function() {
    alert('Hello World');
    

});