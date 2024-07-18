//create an array of numbers from 1 to 5 and log the array to the console

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers[0]);
console.log(numbers[4]);


//use push method to add a new number to the end of the array

numbers.push(6);
console.log(numbers);

//use pop method to remove the last number from the array
numbers.pop();
console.log(numbers)

//use shift method to remove the first number from the array
numbers.shift();
console.log(numbers);

//use unshift method to add a new number to the beginning of the array

numbers.unshift(0);
console.log(numbers);

//use the map method to create a new array by adding 1 to each element in the original array

let newArray = numbers.map((index, key) => {
    return index + 1;
});
console.log(newArray);

//use the filter method to create a new array that only contains numbers greater than 2

let filteredArray = numbers.filter((index, key) => {
    return index > 2;
}
);
console.log(filteredArray);

//use the reduce method to sum all the numbers in the array

let sum = numbers.reduce((total, index) => {
    return total + index;
}, 0);
console.log(sum);


//use for loop to iterate over the array and log each number to the console

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//use forEach method to iterate over the array and log each number to the console

numbers.forEach((index) => {
    console.log(index);
})


//create a two dimensional matrix using an array of arrays, i am facing prblm here

let matrix = []
for (let i = 0; i < 5; i++) {
    let row = []
    for (let j = 0; j < 5; j++) {
        row.push(j)
    }
    matrix.push(row)
}
console.log(matrix)
console.log(matrix[2][2])