//singleTon Object
// const tinderUser = new Object()

// No-SingleTon Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "varshik"
tinderUser.isLoggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "varshik@gmail.com",
    fullName: {
        usersFullName: {
            firstName: "varshik",
            lastName: "prajapati"
        }
    }
}

//console.log(regularUser.fullName.usersFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

// spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {

    },
    {

    }
]

// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "varshik"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "varshik")


// Jason is simpally a javascript notation
// {
//     "name": "varshik",
//     "courseName": "js",
//     "price": "free"
// }

[
    {},
    {},
    {}
]