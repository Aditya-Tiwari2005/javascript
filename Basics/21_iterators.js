// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element ==5){
//         console.log("5 is the best");
//     }
//     console.log(element);
// }

// accessing and printing elements for array using for loop.In js we don't have index out of bound we just get undefined.

// let myArray=["flash","Batman","superman","Doreamon"]
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// Break and Continue.
// for (let i = 0; i < 20; i++) {
//     if(i==5){
//         console.log(`Detected 5`);
//         break //yeh control flow ko break krdega jaise hi condition true hogi.
//     }
//     console.log(`Value of i is ${i}`);
// }

// for (let i = 0; i < 20; i++) {
//     if(i==5){
//         console.log(`Detected 5`);
//         continue //it just continue the loop and skips that value does not print it .
//     }
//     console.log(`Value of i is ${i}`);
// }

// while loop;

// let i=0;
// while (i<=10) {
//     console.log(`value of i is ${i}`);
//     i++;
// }

//Array using while loop;
// let myArray=['flash','batman','superman','Spiderman']
// let i=0;
// while(i<myArray.length){
//     console.log(`Value is ${myArray[i]}`);
//     i++;
// }

// do-while loop;
// let score=1
// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score<=10);//do wala tab tak chlega jab tak while ki value true hai;

// for of loop;
// const arr=[1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }
// string pe for of
// const greetings="Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);    
// }

// Maps in js unique values in key value pair are stored.

// const map=new Map()
// map.set('In',"India")
// map.set('US',"United states of America")
// map.set('Fr',"France")
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }//gives a array of both key and value and if we want them separate then 
// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

// const obj={
//     'game1' :'NFS',
//     'game2' :'spiderman'
// }
// for (const [key,value] of obj) {
//     console.log(key,':-',value);
// }//obj is not iterable

// for-in loop :- for in loop is mainly used to iterate a object ,its also used for other works also.
 
// const myObj={
//     cpp : 'c++',
//     rb  :'ruby',
//     js :'javascript'
// }
// // agr obj ki key chahiye ho to direct key print krwalo aur agr values chahiye to myObj[key] esse likho.
// for (const key in myObj) {
//     console.log(`${key} shortcut for ${myObj[key]}`);
// }

// for in loop in array ;- it directly does not give value it give key and for elment in the array we use programming[key]. 
// const programming=["js","rb","java","swift"]
// for (const key in programming) {
//     console.log(programming[key]);
// }
// maps are not iterable so for-in loop will not work on it;


// FOR EACH LOOP 
const coding =["js", "ruby", "java","python" ,"cpp"]

// coding.forEach(function(item) {
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach( (item,index,arr) =>{
//     console.log(item,index,arr)
// })  

// array of objects
const myCoding =[
    {
        languageName:"javasrcipt",
        langugaeFileName: "js"
    },
    {
        languageName:"java",
        langugaeFileName: "java"
    },
    {
        languageName:"python",
        langugaeFileName: "py"
    },
]
// Accessing the array of objects.
myCoding.forEach((item)=>{
    console.log(item.languageName);
})