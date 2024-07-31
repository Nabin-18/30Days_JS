//Basic Regular Expressions

// I am new to regular expressions and I am trying to learn it. all the code are AI generated and I am trying to understand it.

//write a regular expression to match a simple pattern(eg. match all occurances of the word "JavaScript " in a string) . Log the result to the console. 

let str = "JavaScript is a programming language. JavaScript is used for web development. JavaScript is an interpreted language. JavaScript is a high-level language.";
let pattern = /JavaScript/g;
let result = str.match(pattern);
console.log(result);

//Write a regular expression to match all digits in a string. Log the result to the console.

let str1 = "I have 2 apples and 3 pineapples";
let pattern1 = /\d/g;
let result1 = str1.match(pattern1);
console.log(result1);


//Character Classes and quantifiers

//write a regular expresssion to match all words in a string that start with a capital letter. Log the result to the console.

let str2 = "I have 2 apples and 3 pineapples";
let pattern2 = /[A-Z]\w+/g;
let result2 = str2.match(pattern2);
console.log(result2);


//write a regular expression to match all sequences of one or more digits in a string. Log the result to the console.

let str3 = "I have 2 apples and 3 pineapples";
let pattern3 = /\d+/g;
let result3 = str3.match(pattern3);

console.log(result3);

//Grouping and caputuring

//write a regular expression to capture the area code ,central office code and line number from a US phone number format(eg.(123)456-7890). Log the result to the console.

let str4 = "(123)456-7890";
let pattern4 = /\((\d{3})\)(\d{3})-(\d{4})/;
let result4 = str4.match(pattern4);
console.log(result4);

//write a regular expression to capture the username and domain name from an email address format . Log the caputres

let str5 = "khanalnabin310@gmail.com";    
let pattern5 = /(\w+)@(\w+\.\w+)/;
let result5 = str5.match(pattern5);
console.log(result5);   

//Assertions and Boundaries

//write a regular expression to match all words in a string that are followed by a comma. Log the result to the console.

let str6 = "I have 2 apples, 3 pineapples, 4 bananas";
let pattern6 = /\w+(?=,)/g;
let result6 = str6.match(pattern6);
console.log(result6);

//write a regular expression to match all words in a string that are not followed by a comma. Log the result to the console.        

let str7 = "I have 2 apples, 3 pineapples, 4 bananas";
let pattern7 = /\w+(?!,)/g;
let result7 = str7.match(pattern7);
console.log(result7);
//Practical Applications

//write a regular expression to match all words in a string that are followed by a comma or period. Log the result to the console.

let str8 = "I have 2 apples, 3 pineapples, 4 bananas.";
let pattern8 = /\w+(?=,|\.)/g;
let result8 = str8.match(pattern8);
console.log(result8);


