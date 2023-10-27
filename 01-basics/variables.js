const accId = 123 //not allowed to change - Not Changable
let accEmail = "testing@gmail.com" // Changable - Preferred to avoid scope issue
var accPwd = "321456" // Changable - not preferred
accCity = "Hyd" //possible to declare variables without type but not preferred

// accId = 321 NOT Possible
accEmail = "changing@gmail.com"
accPwd = "654123"
accCity = "CA"

console.log(accId, accEmail, accPwd, accCity);

