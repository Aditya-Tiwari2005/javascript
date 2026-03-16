let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate);//object hai date

//agr koi specific date hi declare krni ho
let myCreatedDate = new Date(2025,0,23)
console.log(myCreatedDate.toDateString());//Months 0 se start hote hai java script mai


//ways to declare date
let minedate = new Date("01-12-23")
console.log(minedate.toLocaleString());

// timestamp 1 January 1970, 00:00:00 UTC se lekar ab tak kitne milliseconds hue.
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(minedate.getTime()); //1 Jan 1970 se lekar mine date tak kitne milliseconds hue.
// to change in seconds (important question).
// Date.now() / 1000 -Milliseconds ko seconds me convert kar deta hai.
console.log(Math.floor(Date.now()/1000));//math.floor isliye use kara hai qki Date.now()/1000 se hume value points mai mil rahi hai joki avoid karni hai isliye .


// Yeh line JavaScript ka Date object banata hai jo current date & time ko store karta hai.
let newDate = new Date() //yeh ek date object hai jo ki date +time return karta hai
console.log(newDate);
console.log(newDate.getMonth()); //yeh curr month dega
console.log(newDate.getDay());//curr day dega

//interesting method

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))