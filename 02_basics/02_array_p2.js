const marvelHeros = ["Thor", "IronMan", "SpiderMan"]
const dcHeros =["SuperMan", "BatMan", "Flash"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros]

// console.log(allNewHeros);


// depth array
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]], ]

const myRealAnotherarray = anotherArray.flat(Infinity)

console.log(myRealAnotherarray);

console.log(Array.isArray("varshik"))
console.log(Array.from("varshik")) // converted string to array

console.log(Array.from({name: "varshik"})) // intresting array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));