const apples: number = 5;
const speed: string = 'hello';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// built in objects
const now: Date = new Date();
const colors: string[] = [ 'hi', 'hello' ];
const myNumbers: number[] = [ 1, 2, 34 ];
const truths: boolean[] = [ true, false ];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = [ 'red', 'green', 'blue' ];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') {
		foundWord = true;
	}
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [ -10, -1, 12 ];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
	numberAboveZero = numbers[i];
}
