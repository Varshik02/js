// ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
         return `${this.username.toUpperCase()}`
    }
}

const web = new user("varshik", "varshik@gmail.com", "123")

console.log(web.encryptPassword());
console.log(web.changeUserName()); 


// behind thew scene

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new user("varshik", "varshik@gmail.com", "123")

console.log(coffee.encryptPassword());
console.log(coffee.changeUserName());