/** call: The call() method of Function instances calls this function with a given this value 
 * and arguments provided individually. */

function setUsername(username) {
    //DB check if username exist or valid
    this.username = username
}

function createUser(username, password, email) {
    //call method invoke a function and explicitly specify the 'this' context within that function.
    setUsername.call(this, username) 
    this.password = password
    this.email = email
}

const registerUser = new createUser("Nag","1234","nag@asap.com")
console.log(registerUser);


/** bind: the bind() method is used to create a new function that, 
 * when invoked, has its this value set to a specific value.  */

function setUsername(username) {
    // DB check if username exists or is valid
    this.username = username;
}

function createUser(username, password, email) {
    //The bind(this) method is used on setUsername. 
    //This binds the this context of the setUsername function to the this value of the createUser function
    //creating a new function setUsernameForUser with the this value explicitly set.
    const setUsernameForUser = setUsername.bind(this); // 'this' is bound to setUsername

    setUsernameForUser(username);
    this.password = password;
    this.email = email;
}

const regUser = new createUser("Kup","1234","kup@asap.com")
console.log(regUser);