//write a program to print the numbers between 1 to 10;

const myNumbers = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
myNumbers();


//write a program to print the multiplication table of 5;

const multiplicationTable = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(`5 * ${i}= ${5 * i}`);
    }

}
multiplicationTable();

//write a program to print the sum of numbers betweeen 1 to 10 using while loop

const sumOfNumbers = () => {
    let i = 1;
    let sum = 0;
    while (i <= 10) {
        sum += i;
        i++;
    }
    console.log(sum);

}
sumOfNumbers()

//write a program to print the number between 1 to 10 using while loop 

const numbers = () => {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
numbers();

//write a program to print the numbers in between 1 to 5 using dowhile loop 

const doWhile = () => {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}
doWhile();

//calculte the facotrial of a number using do while  loop

const factorial = (num) => {

    let i = 1;
    let fact = 1;
    do {
        fact *= i;
        i++;
    } while (i <= num);
    console.log(fact);
}
factorial(5);


//write a program to print * using nested loop 
//in this case , i and j are used 

const printStar = () => {
    for (let i = 1; i <= 5; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}
printStar();

