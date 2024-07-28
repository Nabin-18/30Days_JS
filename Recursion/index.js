//Basic recursion

//write a recursive function to calculate the factorail of a number and log the result

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
    }
console.log(factorial(5));

//write a recursive function to calculate the nth number in the fibonacci sequence and log the result

function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(5));

//Recursion with arrays

//write a recursive function to sum all the numbers in an array and log the result

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 2, 3, 4, 5]));

//write a recursive function to find the maximum number in an array and log the result

function maxArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return Math.max(arr[0], maxArray(arr.slice(1)));
}   
console.log(maxArray([1, 2, 3, 4, 5]));

//String Manipulation and Recursion

//write a recursive function to reverse a string and log the result

function reverseString(str) {
    if (str === '') {
        return '';
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString('hello'));

//write a recursive function to check if a word is a palindrome and log the result  

function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }
    return false;
}
console.log(isPalindrome('racecar'));

//Tree Recursion

//write a recursive function to perfrom an in-order traversal of a binary tree and log the result

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.data);
        inOrderTraversal(node.right);
    }
}
console.log(inOrderTraversal(node));

//write a recursive function to calculate the depth of a binary tree and log the result

function depth(node) {
    if (node === null) {
        return 0;
    }
    return Math.max(depth(node.left), depth(node.right)) + 1;
}
console.log(depth(node));
