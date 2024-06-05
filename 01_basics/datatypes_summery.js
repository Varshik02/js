// primitive Datatype

// 7 Types : String, Number, Boolean, null, undefined, Symbol(To provide uniqueness), BigInt(larg values)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3124567893546456n // bigInt
console.log(typeof(bigNumber));

// Refrence Type (Non-primitive)

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "ironMan", "Hulk"]

//Object
let myObj = 
{
    name: "varshik",
    age : 21,
    state : "surat"
}

const myFunction = function() {
    console.log("Hello world");
}

myFunction()

console.log(typeof(outsideTemp));
console.log(typeof(myFunction));
console.log(typeof(heros));