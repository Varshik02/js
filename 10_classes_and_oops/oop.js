const user = {
    userName: "varshik",
    loginAccount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from Database");
        //console.log(`username: ${this.userName}`);
        console.log(this);
    }
}


// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne = new User("varshik", 10, true)
const userTwo = new User("web Tech", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// new keyword:- 

// STEP:1 When we create a new keyword an empty object is created which is known as instance
// STEP:2 An constructor function is called because of new keyword then it pack all the arguments  and give it to us
// STEP:3 Then all these argument we have created are injected into this keyword
// STEP:4 Then we got it into our function