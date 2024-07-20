//use templete literals to create a string that includes variables for a person name and age


const name = "John";
const age = 30;

const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);


//create a multiline string using templete literals

const multiline = `This is a multiline string! and it is awesome!`;
console.log(multiline);

//destructuring objects

//use arrary destructuring to assign the elements of the arrary colors to the variables color1, color2, and color3

const colors = ["red", "green", "blue"];
const [color1, color2, color3] = colors;
console.log(color1, color2, color3);

//use object destructuring to extract the title and author properties from the given object

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
};

// Object destructuring to extract title and author
const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

//spread and rest operators

//use the spread operator to create a new array that includes all elements of an existing array, colors, and adds the elements "black" and "purple"


const color = ["red", "green", "blue"];
const moreColors = ["black", "purple"];

const allColors = [...color, ...moreColors];
console.log(allColors);

//use the rest operator to create a function that can take any number of arguments and return their sum

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

