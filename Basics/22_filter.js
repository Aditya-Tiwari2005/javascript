// const coding =["js" , "ruby","java","python","cpp"]
// for each kuch bhi return nahi krta.

// const values = coding.forEach((item)=>{
//     console.log(item);  
// })

// console.log(values);

// filter()=> array ke har element par check lagata hai.
// 👉 Jo element condition true karta hai, wahi new array me add hota hai.
// 👉 Jo false karta hai, woh hata diya jata hai

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter((num)=> num>4)
// const newNums= myNums.filter((num)=> {
//     return num>4 //in this we have created a new scope by adding these {} so we have to return in this due to a new scope.
// })
// now we use for each loop for this same.
const newNums=[]
myNums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);
