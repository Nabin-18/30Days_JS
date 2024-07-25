//Creating and exporting Modules

//create a module that exports a function to add two numbers . Import and use this module in another script



export const add = (a,b) => {
    return a+b;
}
console.log(add(2,3));

export const person=()=>{
    return {
        name:'John Doe',
        age:30
    }
}
console.log(person());


//create a module that exports multiple functions using named exports. Import and use these functions in another script

export const add1 = (a,b) => {
    return a+b;
}
export const sub = (a,b) => {
    return a-b;
}
export const mul = (a,b) => {
    return a*b;
}
export const div = (a,b) => {
    return a/b;
}

console.log(add1(2,3));
console.log(sub(2,3));
console.log(mul(2,3));
console.log(div(2,3));


//import and use a function using lodash
import _ from 'lodash';

console.log(_.random(1,10)); //generates a random number between 1 and 10


//import and use a function using axios

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    console.log(response.data);
})





