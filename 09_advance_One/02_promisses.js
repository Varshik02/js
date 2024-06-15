//fetch('http://xyz.com').then().catch().finally()

const promissOne = new Promise(function(resolve, reject){
    // Do and asyc task
    // DB calls, cryptography, networkCall
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promissOne.then(function(){
    console.log('Promiss consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: 'varshik', email: 'varshik@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: 'varshik', password: '123'})
        }else{
            reject('ERROR, Somethong went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.userName
})
.then((userName) => {
    console.log(userName);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promiss is either RESOLVED or REJECTED"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName: 'javascript', password: '123'})
        }else{
            reject('ERROR, JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
        const response = await promiseFive
        console.log(response);
   } catch (error) {
        console.log(error);
   }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})



