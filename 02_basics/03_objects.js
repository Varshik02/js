// // objects are declared in 2 Ways
// 1. Littrel
// 2. constructor

// singelTon

// Object.create()

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "varshik",
    "fullName": "Varshik Prajapati",
    [mySym]: "mykey1",
    age: 21,
    location: "surat",
    email: "varshik@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

// value access

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["fullName"]);
// console.log(jsuser[mySym]);


// change values

jsuser.email = "prajapativarshik@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "123@gmail.com"

// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello Js User");
}

jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());