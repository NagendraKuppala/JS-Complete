// if else statement
/* if(condition){
    // if true, execute this block
}else {
    // if false, execute this block
} */

// else if statement
/* if (condition) {
    // if this condition is true, execute this block and exist
} else if(anotherCondition){
    // if this another condition is true, execute this block and exist
} else {
    // if both the above conditions are false, execute this block
} */

//Switch statement
/* switch (key) {
    case value1:
        //if value1, Execute this block and exist
        break;
    case value2:
        //if value2, Execute this block and exist
        break;
    default:
        //if none, Execute default block and exist
        break;
} */

//Conditional and Logical Operators//
/*  <  - less than
    >  - greater than
    <= - less than or equal to
    >= - greater than or equal to
    != - Not equal to
    == - equal to
    === - equal to and equal datatype
    !== Not equal to or not equal datatype
    && - AND
    || - OR
    !  - NOT
    ?? - Nullish */

// Ternary Operator (?:)
// (condition) ? "if true, execute this block" : "if false, execute this block"


//for loop iterations:-
for (let i = 0; i < 5; i++) { //for(declare index; condition ; index increament or decreament)
    const element = i; 
    //console.log(`Iteration: ${element}`);
}

//Break and Continue iterations
console.log(`***--- For Loop - Break condition ---***`);
for (let i = 0; i < 5; i++) {
    const element = i;
    if (element == 3) {
        console.log(`Iteration: ${element} Detected, Break the for loop`);
        break; //Will break the for loop here and exist
    }
    console.log(`Iteration: ${element}`);
}

console.log(`***--- For Loop - continue condition ---***`);
for (let i = 0; i < 5; i++) {   
    const element = i;
    if (element == 3) {
        console.log(`Iteration: ${element} Detected, skip the iteration and continue`);
        continue; //Will skip the for loop iteration here and continue next iteration
    }
    console.log(`Iteration: ${element}`);
}


//while loop iteration:-
/* while (condition) {
    //if condition met, execute this block
} */

console.log(`***--- While Loop ---***`);
let heros = ["Superman","Batman", "Ironman", "Spiderman","Thor"]
let index = 0
while (index <= heros.length) {
    console.log(`SuperHeros: ${heros[index]}`);
    index++;
}

//Do While loop iteration:-
/* do {
    //Execute this block once and if while condition met execute the iterations
} while (condition); */
let course = ["MATH", "FNCE", "HR", "PM"]
let inx = 0

console.log(`***--- Do While Loop ---***`);
do {
    console.log(`SuperHeros: ${course[inx]}`);
    inx++;
} while (inx < course.length);


//'for of' loop
/* for (const iterator of object) {
    //Executes the block for number of elements in the object
} */
console.log(`***--- for of Loop on an array object---***`);
const nums = [1,3,5,4,2]
for (const num of nums) {
    console.log(`iteration: ${num}`);
}

console.log(`***--- for of Loop on a string object ---***`);
const name = "Nag Kup"
for (const char of name) {
    console.log(`Characters in name: ${char}`);
} 

console.log(`***--- for of Loop on a Map object ---***`);
//map object holds key-value pairs and remembers the original insertion order of the keys.
const sampleMap = new Map()
sampleMap.set("1","first")
sampleMap.set("3","third")
sampleMap.set("2","second")
sampleMap.set("4","forth")
console.log(sampleMap);

//for of Loop on a Map object
for (const [key,value] of sampleMap) {
    console.log(`For key ${key} the value is ${value}`);
}

/*** for of loop will not iterate on js objects 
 * For iterate js objects, for in loop is recommended
*/
console.log(`***--- for in Loop on a js objects ---***`);
const sampleObject = {
    1 : "first",
    2 : "second",
    3 : "third"
}

console.log(sampleObject);

//for in loop on js object
for (const key in sampleObject) {
    console.log(sampleObject[key]);
}

/*** for each loop */
/*array.forEach((element,index,array) => {
   //iterate on number of array elements 
});*/
const carBrands = ["BMW","Benz", "Audi", "Volvo", "Porche","Lexus","Acura"]
console.log(`***--- for each Loop on a array objects ---***`);

carBrands.forEach((brand,index)=>{
    console.log(`${brand} index ${index} in array`);
})

console.log(`***--- for each Loop on a array of objects ---***`);
const cars = [
    {
        name : "Acura RL",
        price : "$50000"
    },
    {
        name : "Lexus GS",
        price : "$60000"
    },
    {
        name : "Lexus ES",
        price : "$45000"
    }
]

cars.forEach((car)=>{
    console.log(`car: ${car.name}, price: ${car.price}`);
})
