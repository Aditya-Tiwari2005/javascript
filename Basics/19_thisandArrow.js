const user={
    username:"Aditya",//object ke andr key value pair
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"//context changed by this
// user.welcomeMessage()
console.log(this) //browser ke andr global object wondow object hai par yaha pe {} yeh hai .
function chai(){
    let username="Aditya"//function ke andr value assign
    console.log(this.username);//this object mai hi use hota hai function mai nahi
}
chai()
//object ke andr this object ko refer krta hai Yaha this user object ko point karta hai.but in normal function this global object ko refer karta hai
// Q-}"Global value {} hoti hai toh undefined kaise?"
// Answer:
// ✔ File-level par this = {}
// ✔ Function-level par (strict mode me) this = undefined


// ++++++  difference b/w arrow function and normal function  +++++

// const chai = function(){
//     let username="Aditya"
//     console.log(this.username);
// }
// chai()

// function key word ko hata do toh yeh ek arrow function hai
// const chai = () => {
//     let username="Aditya"
//     console.log(this);
// }
// chai()

// sum using arrow function way 1
// const addTwo= (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4));

// way 2
// const add = (num,num1) => num+num1
// console.log(add(3,6));

// if u are using curly braces then u have to write return and if u r using () this we don't have to write return
const add = (num,num1) => (num+num1)
console.log(add(3,6));
