function setUserName(userName){
    // complex DB calls
    this.userName = userName
}

function createUser(userName, email, password){

    // to  hold the refrence we use call    
    setUserName.call(this,userName) 
    this.email = email
    this.password = password
}

const user = new createUser("varshik", "varshik@gmail.com", 123)
    
console.log(user);
