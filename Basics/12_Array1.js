const myArr =[0,1,2,3,4,5]
console.log(myArr[0]);
// push element our array.
myArr.push(6);
console.log(myArr);
// to delete last elements from our array we use .pop() method.
myArr.pop();
console.log(myArr);
// to insert element at the begining of the array for this we use .unshift() method this method is generally not recommendable because it takes a lot time .
myArr.unshift(12)
console.log(myArr);
// to delete elements we can also use .shift() it works like .pop() method.
myArr.shift()
console.log(myArr);
// to check for a value that it exist in your array or not for this u can use .includes(__) method.It returns boolean type because we are checking.
console.log(myArr.includes(5));
// to get the index of any value from ur array u can use .indexof(__) method. 
console.log(myArr.indexOf(4));// o/p is 4 .4 is on 4th index.

// Adds all the elements of an array into a string, separated by the specified separator .join() takes an array and returns a string where all elements are joined with a comma by default.
// const newArr = myArr.join()
// console.log(typeof newArr);
console.log(myArr.join()); // works perfectly
// we can do it any of the 2 way we want.

// .slice()->.slice() array ka ek portion nikalta hai aur naya array return karta hai.
// Original array unchanged rehta hai (immutable).

let arr=[10,20,30,40,50]
let sliced =arr.slice(1,4); //(start,end)
console.log(arr);
console.log(sliced);

// .splice()-> .splice() array me elements ko add, remove, ya replace karta hai.Ye original array ko modify karta hai (mutable).
// Syntax:array.splice(startIndex, deleteCount, item1, item2, ...)

// removing  -> splice(startIndex, deleteCount, item1, item2, ...) = meraArr.splice(begin->2(inclusive),deleteCount->2) mtlb yeh start hoga index 2 se aur usske 2 values delete krega
let meraArr=[10,20,30,40,50]
meraArr.splice(2,2)
console.log(meraArr);

// replacing -->> parameter are .splice(begin -> 1,deleteCount -> 2,item1 -> 90,item2 -> 100) ,start hoga index 1 se aur 2 item delete honge array se usske jagah 2 new item aaenge jo diye hai parameters mai .
let newArr=[10,20,30,40,50]
newArr.splice(1,2,90,100);
console.log(newArr);

// Inserting -->> parameter are .splice(begin -> 1,deleteCount -> 0,item1 -> 15) ,start hoga index 1 se delete kuch nahi krna bss index 1 pe value insert ho jaaegi.
// Specified index pe nayi value insert hoti hai. Us index ke baaki elements automatically right shift ho jaate hain. Original array modify ho jaata hai
let arr1=[10,20,30,40,50]
arr1.splice(1,0,15);
console.log(arr1);





