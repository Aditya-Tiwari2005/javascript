const accountId= 1445533
let accountEmail ="aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

/*
prefer not to use var 
because of issue in blockscope and functional scope.
*/
// accountId = 2 not allowed
accountEmail ="adit@gmail.com"
accountPassword="2345"
accountCity="Mumbai"
console.log("accountId")
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])