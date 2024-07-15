//If else statement 

//write a program to check number positive, negative and zero

const checkNumber = () => {
    let number = 1;
    if (number > 0) {
        console.log("The number is positive")
    }
    else if (number < 0) {
        console.log("The number is negative")
    }
    else {
        console.log("The number is zero")
    }
}
checkNumber()

//write a program to find the largest of three numbers using nested loop

const largestNumber = () => {
    let a = 10;
    let b = 20;
    let c = 30;
    let largestNumber;
    if (a > b) {
        if (a > c) {
            largestNumber = a;
            console.log("The largest number is ", largestNumber)
        }
        else {
            largestNumber = c;
            console.log("The largest number is ", largestNumber)
        }

    }
    else {
        if (b > c) {
            largestNumber = b;
            console.log("The largest number is ", largestNumber)
        }
        else {
            largestNumber = c;
            console.log("The largest number is ", largestNumber)
        }
    }
}
largestNumber()

//switch statement

//write a program to check the day of the week

const checkDay = () => {
    let day = 7;
    switch (day) {
        case 1:
            console.log("Today is Sunday");
            break;
        case 2:
            console.log("Today is Monday");
            break;
        case 3:
            console.log("Today is Tuesday");
            break;
        case 4:
            console.log("Today is Wednesday");
            break;
        case 5:

            console.log("Today is Thursday");
            break;
        case 6:
            console.log("Today is Friday");
            break;
        case 7:
            console.log("Today is Saturday");
            break;
        default:
            console.log("Invalid Day")
            break;
    }

}
checkDay()

const checkResult = () => {
    let marks = 81;
    switch (true) {
        case marks >= 90:
            console.log("Grade A");
            break;
        case marks >= 80:
            console.log("Grade B");
            break;
        case marks >= 70:
            console.log("Grade C");
            break;
        case marks >= 60:
            console.log("Grade D");
            break;
        case marks >= 50:
            console.log("Grade E");
            break;
        default:
            console.log("Fail")
            break;
    }

}
checkResult()

//ternary operator
//write a program to check the number is even or odd

const checkEvenOdd = () => {
    let number = 5;
    let result = number % 2 === 0 ? "Even" : "Odd";
    console.log("The number is ", result)

}
checkEvenOdd()

//combining switch and ternary operator

//write a program to check the leap year using multiple condition 

const checkLeapYear = () => {
    let year = 2021;
    let result = year % 4 === 0 ? (year % 100 === 0 ? (year % 400 === 0 ? "Leap Year" : "Not a Leap Year") : "Leap Year") : "Not a Leap Year";
    console.log("The year is ", result)
}
checkLeapYear()


