//var c = 300 // global scope
let a = 300
if(true){
    //block scope
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);

function one() {
    const userName = "varshik"

    function two() {
        const webSite = "Youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()

if (true){
    const userName = "varshik"
    if(userName === "varshik"){
        const website = "youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


//***********INTRESTING*****************


function addOne(num){
    return num + 1
}

addOne(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)