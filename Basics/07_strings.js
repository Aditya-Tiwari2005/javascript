const name ="hitesh"
const repoCount = 50
//old way of merging string
// console.log(name + repoCount + "value");
//Mordern way to merge strings using backticks;
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

//defining string .if define strings like this we get the index values and many inbuilt methods of string
const gameName = new String('Aditya-Tiwari')
// console.log(gameName);


// console.log(gameName[0]);
// console.log(gameName.__proto__); //In JavaScript, every object has a hidden link to another object called its prototype.That prototype object contains methods and properties that the original object can use.


// // String methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));
// //slicing or substring
// const newString =gameName.substring(0,4)
// console.log(newString);
const anotherString =gameName.slice(-8, 7)
console.log(anotherString);
// trim() method basically remove the starting space and end space.
const newStringOne =" Aditya "
console.log(newStringOne);
console.log(newStringOne.trim());
//replace is used to replace some values with another values given by user.
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
//includes is used to check if it contains that value or not;
console.log(url.includes('123'));
//converts it into array.                                                 
console.log(gameName.split('-'));

