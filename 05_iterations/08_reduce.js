const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)

console.log(myTotal);

const shopingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "React js course",
        price: 4999
    }
]
const totalPrice = shopingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);
