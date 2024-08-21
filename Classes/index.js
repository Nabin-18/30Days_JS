//classes
//define a class person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
//add a method to the person that updates the age of the person and logs the new age.
Person.prototype.updateAge = function (newAge) {
    this.age = newAge;
    console.log(`My age is now ${this.age}`);
}

//class inheritance
//define a class student that extends the person class .Add property studentId and a method to log the studentId.
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    logStudentId() {
        console.log(`My student ID is ${this.studentId}`);
    }
}

//override the greeting method in the student class to include the studentId  in the message. Log the overridden greeting message.
Student.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}`;
}

//static methods and properties 
//add a static method to the person class that returns a generic greeting message .Call this static method wihout creating an instance of the class.
Person.greetAll = function () {
    return `Hello everyone!`;
}

//add a static property to the person class that stores the number of instances of the person class created. Increment this property each time a new instance of the person class is created.

Person.count = 0;
Person.prototype.constructor = function (name, age) {
    this.name = name;
    this.age = age;
    Person.count++;
}


