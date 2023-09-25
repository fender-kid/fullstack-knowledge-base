// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function Types, parameters

// Primitives

let age: number = 24;

let userName: string = 'Dad'

let isInstructor: boolean;

// More Complex Types

// This ensures my array accepts only string types.
let hobbies: string[];

//Example Array
hobbies = ['John', 'Jane', 'Jill']


// This ensures person will be an object type made up of a name of string type and an age of number type.
let person: {
    name: string;
    age: number;
};

// Example Object
person = {
    name: 'Max',
    age: 32,
}

// This ensures we store an array of objects that have string names and number ages.
let people: {
    name: string;
    age: number;
}[];

// Type inference
// when I immediately assign a string value to a variable, Typescript will infer its type.
let course = 'React - The Complete Guide';

console.log(typeof course); // will log string

// Union Types allow us to store different types in a variable
let part: string | number = 'CV Axle';

part = 2222;
part = 'Brake Pad';

// Type alias allows us to create our own types
//  allow you to define a type once and reuse it
// Example of a "Part" type 
type VehiclePart = {
    name: string;
    id: number;
}

let carPart: VehiclePart;
let truckPart: VehiclePart;
let vanPart: VehiclePart;

// Functions & types

function add(a: number, b: number) {
    return a + b;
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const originalArray = [2, 3, 4];
const newValue = 1;

const newArray = insertAtBeginning(originalArray, newValue);

console.log(newArray); // Output: [1, 2, 3, 4]
console.log(originalArray); // Output: [2, 3, 4] (original array is unchanged)


// updatedArray[0].split('');

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

