// Primitive
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt.

const score =100
const scoreValue =100.2 //IN js there is nothing specified that the number is float or not its only Number
const isLoggedIN = false
const outsidetemp= null
let userEmail;

// make the value unique even if the value is same its show the are not same
const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id ===anotherid);// "===" its strictly checks the value by also checking its datatype.

const bigNumber =  2345667889098765443456n


//Reference (Non primitive)
//Array, Objects, Function

//Array
const heros =["Iron man","Spiderman","Thor","Aditya"];
console.log(heros);

//objects
let myobj = {
    name: "Aditya",
    age: 21,
}
console.log(myobj);

//Function
const myfunction = function(){
    console.log("Hello world")
}
console.log(myfunction());
