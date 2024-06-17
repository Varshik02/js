// let myName = "varshik"
// let myChannel = "web Tech"
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function(){
        console.log(`spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.varshik = function(){
    console.log(`varshik is present in all objects`);
}

Array.prototype.heyVarshik = function(){
    console.log(`varshik says hello to you`);
}


// heroPower.varshik()
// myHeros.varshik()
// myHeros.heyVarshik()
//heroPower.heyVarshik()


// inheritance

const User = {
    name: "varshik",
    email: "varshik@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvilable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "varshik prajapati   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

"varshik".trueLength()
"iceTea".trueLength()

