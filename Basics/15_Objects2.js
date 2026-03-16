// const tinderuser=new Object();
// console.log(tinderuser);

// const tinderuser={}
// tinderuser.id="123abc"
// tinderuser.name="Aditya"
// tinderuser.isloggedIn=false
// console.log(tinderuser);


// we can store multiple object in a object and also can access it using (.) operator and using multiple dot we can go through the nested loop
const regularUser = {
    email : "Aditya.work@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Aditya",
            lastname:"Tiwari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

// OPTIONAL CHANING ----

const user = {
  name: "Aditya"
};

console.log(user.address.city);//gives error because city property doesn't exist.

// this problem can be solved by using optional chaining 

const user1 = {
  name: "Aditya"
};

console.log(user1.address?.city);//output-- undefined


// object inside object nested object;

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
]

console.log(users[1].email);//accessing value as done in a array normally 


const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="Aditya"
tinderuser.isloggedIn=false

console.log(tinderuser);

console.log(Object.keys(tinderuser));//return all keys
console.log(Object.values(tinderuser));//return all values
console.log(Object.entries(tinderuser));//key value pair dega in a array inside a array
//to check if a object contain some property or not for that we use .hasOwnProperty() it returns a boolean value;
console.log(tinderuser.hasOwnProperty('isloggedIn'));
