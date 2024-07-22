//Basic event handling 

//add a click event listner to a button that changes the text content of a paragraph

//select the button
const button = document.querySelector('button');

const paragraph = document.querySelector('p');
button.addEventListener('click', function () {
    paragraph.textContent = "I am changed";
});

//add a double click event listner to an image that toggles the visibility 
//of the image

const image = document.querySelector('img');
image.addEventListener('dblclick', function () {
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});

//add a mouseover event listner to a button that changes the background color of the button
button.addEventListener('mouseover', function () {
    button.style.backgroundColor = 'red';
});

//add a mouseout event listner to a button that changes the background color of the button
button.addEventListener('mouseout', function () {
    button.style.backgroundColor = 'white';
});

//add a keydown event listner to the document that changes the background color of the document
document.addEventListener('keydown', function () {
    document.body.style.backgroundColor = 'blue';
});

//add a keyup event listner to the document that changes the background color of the document

document.addEventListener('keyup', function () {
    document.body.style.backgroundColor = 'white';
}
);

//add a submit event listner to a form that prevents the default behavior of the form

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

//add a change event listner to a select element that changes the text content of a paragraph
const select = document.querySelector('select');
select.addEventListener('change', function () {
    paragraph.textContent = select.value;
});

//add a click event listner to a list that logs the text content of the list item clicked
const list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    console.log(e.target.textContent);
});

//add an event listner to a parent element that listens for the events from dynamically added child elements

const parent = document.querySelector('div');
parent.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        console.log('Button clicked');
    }
});