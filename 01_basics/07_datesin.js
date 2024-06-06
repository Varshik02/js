// Dates

let myDate = new Date()

// Date Methods
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());


// typeof = object
console.log(typeof(myDate));

// let myCreatedDate = new Date(2020, 6, 23)
// let myCreatedDate = new Date(2020, 6, 23, 5, 3)
// let myCreatedDate = new Date("2024-05-06")
let myCreatedDate = new Date("01-06-2024")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());


// console.log(`Now the hour is ${newDate.getHours()} and the minutes are ${newDate.getMinutes()} and the seconds are on going ${newDate.getSeconds()}`)

newDate.toLocaleString('default', {
    weekday: "long"
})


