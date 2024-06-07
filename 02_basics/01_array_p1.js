// array

const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["Ironman", "Hulk", "Vision"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);
// console.log(heros);
// console.log(myArr2);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(20)
// myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));

// const newArray = myArr.join()

// console.log(myArr);
// console.log(newArray);

// ***slice, splice***

// Slice (Last element included)
console.log("A", myArr);
const mynA = myArr.slice(1, 3)
console.log(mynA);

// Splice (Last element Not included)
console.log("B", myArr);
const mynB = myArr.splice(1, 3)
console.log(mynB);
console.log(mynA);