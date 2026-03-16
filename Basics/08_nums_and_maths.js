// object wrapper hamare pass javascript mai primitive values hoti hai aur jab hume unpe koi bhi method chalana hota hai toh hum uske corresponding object mai ussko wrap kar dete hai aur jab kaam ho jata hai toh ussko delete kar dete hai

const score = 400
console.log(score);

// defining a number that shows that its exactly a number means its type

const balance = new Number(100) //object hai yeh
console.log(balance);
// now we can see that its a number so it will ae some methods like we have in strings
// Methods 

// this method will convert the number to a string.
console.log(typeof balance.toString());

//it keeps the number of digits you specify after the decimal point..toFixed() ek method hai jo string return karti hai, chahe aap primitive number pe call karein ya object number pe.
console.log(typeof balance.toFixed(2));

// Precision yeh before and after decimal value control krta hai 
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

// Ye method number ko human-readable string me format karta hai, local rules (jaise commas, decimal symbol, currency) ke hisaab se.Output string hota hai.for indian system we can use 

const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN"));

// numbers min value and max value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(5.4));
console.log(Math.ceil(5.4));
console.log(Math.floor(5.4));
console.log(Math.min(3,2,4,1));
console.log(Math.max(3,2,4,1));


//Math.random() will give the value in between 0 and 1 always.
console.log(Math.random());
//between 0 and 10
console.log(Math.random()*10);
//between 1 and 10
console.log(Math.floor(Math.random()*10) +1); //+1 isliye kyuki 0 naa aae
// range
const min =10
const max= 20
console.log(Math.floor(Math.random()* (max-min+1) + min));



