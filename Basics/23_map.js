// const myNumbers =[1,2,3,4,5,6,7,8,9,10]
// // adding 10 in every item in the array using map.
// // const newNum =myNumbers.map((num)=>{ return num+10})
// // console.log(newNum);

// // chaining using map .
// const newNums=myNumbers
//                .map((num)=>num*10)
//                .map((num)=> num+10)
//                .filter((num)=>num>=40)
// console.log(newNums);


// reduce() is an array method used to reduce the entire array into a single value.
// That single value can be:A sum,A product,An object,A string,Even another array

// sum
const nums = [1,2,3];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total);
//product
const newp=[1,2,3,4]
const pro=newp.reduce((acc,curr) => acc*curr,1);
console.log(pro);
