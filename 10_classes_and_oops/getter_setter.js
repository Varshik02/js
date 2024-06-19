class user {
    // constructor is setting the email and password because we have used getter and setter
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // getter and setter are overwriting the email and password

    get email(){
        return `${this._email}`
    }

    set email(value){
        this._email = value.toUpperCase()
    }
    get password(){
        return `${this._password}varshik`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const varshik = new user("varshik@gmail.com", "abcd")
console.log(varshik.password);
console.log(varshik.email);
