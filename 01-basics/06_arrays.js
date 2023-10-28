const myArr1 = [9, 7, 8, 2, 1, 4]
const myArr2 = new Array(1, 2, "Nag", "kup") //another way to declare an array.

// Array methods
myArr1.push(3) //will push/add the element at the end of an array
console.log(myArr1);

myArr1.pop() //will delete the last element in an array
console.log(myArr1);

myArr1.unshift(9) //will add the element at the start of an array
console.log(myArr1);

myArr1.shift() //will delete the element at the start of an array
console.log(myArr1);

console.log(myArr1.includes(9)) //returns 'true' if element exist or 'false' if not

console.log(myArr1.indexOf(7)) //returns the index of element

const newArr = myArr1.join() //returns a new string by concatenating all of the elements in the array
console.log( newArr);


console.log("A ", myArr1);

//slice method will not alter the original array
const myn1 = myArr1.slice(1, 3) //returns a copy of new array portion from start and end(not included) indexes
console.log(myn1);
console.log("B ", myArr1);

//splice method will remove the spliced portion from the original array
const myn2 = myArr1.splice(1, 3) ////returns a copy of new array portion from start and end(included) indexes
console.log(myn2)
console.log("C ", myArr1)


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//syntax: const newArr = arr1.concat(arr2, arr3)
const superHeros = marvel_heros.concat(dc_heros) //returns a new array merging two or more arrays
console.log(superHeros);

//another way to concatinate is using spread operation (...)
const allSuperHeros = [...marvel_heros, ...dc_heros] //spread operation (...) merging two or more arrays
console.log(allSuperHeros);

const anArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //nested arrays
const another_array = anArray.flat(Infinity) //flat method will spread the nested arrays till the given depth
console.log(another_array);



console.log(Array.isArray("Nag")) //returns true or false if its array or not
console.log(Array.from("NagKup")) //converts into an array

const obj1 = {
    name: "NagKup",
    age : 33
}
console.log(Array.from(obj1.name)) // interesting
console.log(Array.from(obj1.age))

let score1 = 100
let score2 = "200"
let score3 = 300

console.log(Array.of(score1, score2, score3)); //creates a new Array from a variable number of arguments