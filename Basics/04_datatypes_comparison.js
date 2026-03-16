// Basic conversion
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
//When you use relational operators (>, <, <=, >=), JavaScript tries to convert strings into numbers if one side is a number.
console.log("2">1); 
console.log("02">1); 

//Relational operators (<, >, >=, <=) convert null to 0.
//Equality (==) treats null in a special way (only equal to undefined).
console.log(null>0);
console.log(null==0);//equality
console.log(null>=0);

//For relational operators (>, <, >=, <=), JavaScript tries to convert values to numbers.Number(undefined) = NaN Any comparison with NaN is false.

console.log(undefined>0);
console.log(undefined==0);//equality
console.log(undefined>=0);



