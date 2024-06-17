class User {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`USERNAME is: ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password){

        super(userName)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`New course was added by: ${this.userName}`);
    }
}

const chai = new Teacher("varshik", "varshik@gmail.com", "123")

chai.addCourses()

const coffee = new User("varshik prajapati")

coffee.logMe()

console.log(chai instanceof User);
