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