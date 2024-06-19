const user = {
    _email: "varshik@gmail.com",
    _password: "abcdgshgs",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}
const varshik = Object.create(user);

console.log(varshik.email);
