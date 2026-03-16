//object.create (means creating object using constructor)

// object literals
// object contains key and value

const mySymbol= Symbol("mykey")
const jsUser={
    name : "Aditya",
    age : 18,
    [mySymbol]:"mykey",
    location : "jAIPUR",
    email : "Aditya@gmail.com",
    isloggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(typeof jsUser[mySymbol]);

// jsUser.email="adiya1223@gmailcom"
// console.log(jsUser.email);
// Object.freeze(jsUser)
// jsUser.email="adiya23223@gmailcom"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingtwo = function(){
    console.log(`Hello user, ${this.name} `);//iss object mai kya kya property  hai ussko refer kar skta hai this 
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());







 