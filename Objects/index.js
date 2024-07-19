//object creation and access

//create an object representing a book with properties like title, author,and year and log the result in the console 

const books = {
    title: "Muna Madan",
    author: "Laxmi prashad devkota",
    year: 2016
}
console.log("Name of author = ", books.author);
console.log("Author =", books.author);
console.log("Published Year =", books.year)


//nested objects

const library = {
    name: "Laxmi pd .devkota",
    books:
    {
        book: ["muna madan", "ishwor"]

    }
}
// console.log("My object=",library)
console.log("Name of the author=", library.name);
console.log("Book Name =", library.books.book[0])


//this keyword 

//add a method to the book object that uses this keyword to return a string with the books title and year and log the result


