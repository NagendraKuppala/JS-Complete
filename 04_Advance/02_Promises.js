//Create Promise
const promiseOne = new Promise(function (resolve, reject) {
    // Execute the async operation here
    // For ex: DB calls, Network Calls, Encryption(cryptography)
    setTimeout(()=>{
        console.log("The Async task is executed for 1sec!");
        resolve() //Once the Async task is complete, end the promise with resolve() to pass return for .then to catch
    },1000)
})

//Consume Promise
promiseOne.then(()=>{
    console.log("The .then callback will execute after the promise is resolved!");
})

//Another way:
/* new Promise(function (resolve, reject) {
    // Execute the async operation here
    // For ex: DB calls, Network Calls, Encryption(cryptography)
    setTimeout(()=>{
        console.log("Async task is executer after 1sec!");
        resolve() //Once the Async task is complete, end the promise with resolve() to pass return for .then to catch
    },1000)    
}).then(()=>{
    console.log("The .then call will execute after the promise is resolved!");
}) */

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username: "Nag", 
            email: "nag@asap.com"
        }) //using resolve() we can pass the promise return value - In this case we are passing object
    }, 1000)
})

promiseTwo.then(function(user){ //resolve() return will be passed to the call back function in .then
    console.log(user);
})

//Promise for Error handling using reject()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        let isUser = true
        if (isUser) {
            resolve({username: "Nag", password: "4321"})
        } else {
            reject('ERROR: Error Handling for promiseThree')
        }
    }, 1000)
})

//Promise chaining
promiseThree.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { //return value of parent .then will pass to the child .then
    console.log(username);
}).catch(function(error){ //Error handling in reject() will pass to .catch()
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //executes always


// Promise handling using Async and await
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let isUser = true
        if (!isUser) {
            resolve({username: "Nag", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//Consume PromiseFour
async function consumePromiseFour(){
    try {
        const response = await promiseFour //await promise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFour() //call async function

//Promise using fetch() and Async & await functions
async function getUserInfo(){
    try {
        const response = await fetch('https://api.github.com/users/NagendraKuppala') //fetch return a promise, await for fetch return
        const data = await response.json() //await for json() conversion
        console.log("***### fetch() using Async & await ###***");
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getUserInfo() //calling async function


//fetch using .then and .catch promise
fetch('https://api.github.com/users/NagendraKuppala')
.then((response) => {
    return response.json()    
}).then((jsonData)=>{
    console.log("***### fetch() using .then and .catch ###***");
    console.log(jsonData);
})
.catch((error) => {
    console.log(error)
})

//promise.all