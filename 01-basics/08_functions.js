function addTwoNumbers(n1, n2){
    let sum = n1+n2
    console.log(n1+n2)
    return sum
}

const result = addTwoNumbers(4,6)
console.log(`Sum of two numbers: ${result}`);

// rest operator (...) in functions is used when we do not know the number of parameters/arguments are passed to the functions
function addCartPrice(...itemPrice){
    return itemPrice
} 

console.log(addCartPrice(20, 10, 30, 55, 46)); //Expected output is an array [20, 10, 30, 55, 46]


//Arrow functions:-
() => {return }
() => ({})

const addNums = (n1, n2) => {
    return n1+n2 //explicite return
}
console.log(addNums(4,6));

const sumNums = (n1, n2) => n1+n2 //implicite return (not required to use 'return' keyword for single statement returns)
console.log(sumNums(4,6));

//IIFE (Immediately Invoked Function Expressions):-
//Executing the function immediately after function declaration.
//*** Why? To avoid global scope pollution issue. 
(function IIFEFunction(){
    console.log("This IIFE Function will be executed immediately!")
})();

(()=>{
    console.log("This IIFE Arrow Function will be executed immediately!")
})();

(function addTwoNumbers(n1, n2){
    let sum = n1+n2
    console.log(sum)
})(4,6);

