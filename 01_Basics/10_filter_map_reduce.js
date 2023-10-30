/* Iterative loops (for each, for of,for in) will not return value.
 * map, filter, reduce methods are used to iterated and return values.
 */

let myArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

/* filter method creates a shallow copy of a portion of a given array,
 * filtered down to just the elements in the condition */
console.log("***--- filter method on arrays ---***");
const lessThanFiveNums = myArr.filter((num) => {
  return num < 5;
});
console.log(lessThanFiveNums);

console.log("***--- filter method on Array of objects ---***");
const myObject = [
  { name: "RL", brand: "Acura", model: "2008" },
  { name: "GS", brand: "Lexus", model: "2006" },
  { name: "ES", brand: "Lexus", model: "2008" },
  { name: "RDX", brand: "Acura", model: "2012" },
];

const myAcura = myObject.filter((car) => {
  return car.brand === "Acura";
});
console.log(myAcura);

/** map method creates a new array populated with the results of
 * function return on every element */
myArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log("***--- map method on arrays ---***");
const myNum = myArr.map((num) => {
  return num * 10;
});
console.log(myNum);

//method chaining is possible
console.log("***--- chaining methods ---***");
const nums = myArr
  .map((num) => {
    return num * 10;
  })
  .filter((num) => {
    return num > 50;
  });

console.log(nums);

/** reduce method callback function on each element of the array 
 * return sum of calculation on the preceding element.*/
console.log("***--- reduce method on arrays ---***");
myArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const initialValue = 0
const sumOfArr = myArr.reduce((acc, curVal)=> {
    console.log(`Accumilator value: ${acc}, Current value: ${curVal}`);
    return acc+curVal
},initialValue)

console.log(sumOfArr);

console.log("***--- reduce method on array of objects ---***");
let cart = [
    {
        product: "pen",
        cost: 10
    },
    {
        product: "pencil",
        cost: 8
    },
    {
        product: "book",
        cost: 15
    }
]

const totalCost = cart.reduce((acc, product)=>{
    console.log(`Accumilator cost: ${acc}, Current cost: ${product.cost}`);
    return acc+product.cost
},0)
console.log(totalCost);
