const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 4 
// console.log(Math.PI);

const myObject = {
    name: 'varshik',
    price: 250,
    isAvilable: true,

    order: function(){
        console.log("not ordered");
    }
}

console.log(Object.getOwnPropertyDescriptor(myObject, "name"));

Object.defineProperty(myObject, 'name', {
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(myObject, "name"));

for (const [key, value] of Object.entries(myObject)) {
    if (typeof value !== 'function') {

        console.log(`${key} : ${value}`);
    }
}
    