let score = "Aditya"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN(Not a number)(type nan is number)
//true - 1,false-0


//converting 1 into boolean value
// let isLoggedIN =1
// let booleanisLoggedIn = Boolean(isLoggedIN)
// console.log(booleanisLoggedIn);


//if any value is assigned then it will give you true otherwise false
let isLoggedIN =""
let booleanisLoggedIn = Boolean(isLoggedIN)
console.log(booleanisLoggedIn);

//1-- true,0--false


// converting numbers into string

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************** OPERATIONS ****************

let value =3
let negValue =-value
console.log(negValue);

// basic maths operation
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

// string concatenation
let str1 ="Hello"
let str2 = " Aditya"
let str3 = str1+str2
console.log(str3);
                       
console.log("1"+2);
console.log(typeof(1+"2"));

console.log("1"+2+2);
console.log(1+2+"2");

console.log(+true);

// to assign value we can also do it but its not a good thing 
// and avoid this
let num1,num2,num3
num1=num2=num3=2+2
console.log(num1);


let gameCounter = 100
gameCounter++;
console.log(gameCounter);
 
      


