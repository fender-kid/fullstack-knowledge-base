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
