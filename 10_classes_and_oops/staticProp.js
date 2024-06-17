class User {
    constructor(userName){
        this.userName =userName
    }

    logMe(){
        console.log(`Username: ${this.userName}`);
    }

    static createId(){
        return `123`
    }
}

const varshik = new User("varshik")
// console.log(varshik.createId())

class Teacher extends User{
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@gmailcom")
iphone.logMe();
console.log(iphone.createId());