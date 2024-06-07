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

console.log((loginUserMessage("varshik")));



