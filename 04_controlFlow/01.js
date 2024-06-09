// if Statement ]

const isUserLoggedIn = true
const temp = 55

// if (temp < 50){
//     console.log(`The Temprature is ${temp} which is less than 50`);
// }
// else{
//     console.log(`The Temprature is ${temp} which is greater than 50`);
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     const power = "Fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// if (balance < 500){
//     console.log("Less than 500");
// }
// else if (balance < 750){
//     console.log("Less than 750");
// }
// else if (balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy cources");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in ");
}

