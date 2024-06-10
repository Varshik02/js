// forIn loop

const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortCut is for ${myObject[key]}`);
}

const programming = ["js", "python", "Ruby", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


// maps are bot iteratable in for-in loop

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(map);
// }