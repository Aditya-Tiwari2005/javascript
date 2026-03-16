//In stack primitive values will be stored.
//In heap non primitve values will be stored.

// stack will get copy of the value not the original refernce.
let name ="Aditya"
let anothername = name //copy of original object.
// console.log(anothername);
anothername ="Javascript"
console.log(name);
console.log(anothername);

//In heap we will get the original reference of the value
let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"                        
}
let userTwo= userOne
// console.log(userTwo);
//To access values in object we use (.);
userTwo.email="Aditya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


