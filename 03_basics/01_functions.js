function sayMyName(){
    console.log("v");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");   
}

// sayMyName // Reference
// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2 );
// }

function addTwoNumbers(num1, num2) {
   
    // let result = num1 + num2 
    // return result
    return num1 + num2
}

const result = addTwoNumbers(4, 5)

// console.log("Result: ", result);

function loginUserMessage(userName = "sam"){
    if(!userName){
        console.log("please enter username");
        return
    }
    return `${userName} just logged in`
}

// console.log((loginUserMessage("varshik")));

// rest operator in function
function calculateCartPrice(val1, val2, ...num1){
    return num1

}

console.log(calculateCartPrice(200, 400, 500,600))


const user = {
    userName: "varshik",
    age: 21
}

function handleObject(anyObject){
    console.log(`userName is ${anyObject.userName} and age is ${anyObject.age}`);
}

// handleObject(user)
handleObject({
    userName: "sam",
    age: 20
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([200, 800, 1200, 1600]));





