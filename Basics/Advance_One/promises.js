// creating promise:-
const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography
    setTimeout(function(){
        console.log('Aysnc task is complete');
        resolve()
    },1000)
})
// consuming the promise?
promiseOne.then(function(){
    console.log('Promise consumed');
})

// ways to show or create -
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
})

// 3 Promise:- Passing some data through resolve

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// PromiseFour:- errror handling

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Aditya",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("The promise is either resolve or rejected")
)

// Promise five:

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR: Javascript went wrong')
        }
    },1000)
})
// async await cannot directly handle the error
async function consumepromiseFive(){
    try {
        const response = await promiseFive //promise is a object se we cannot use this()
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumepromiseFive()


// async function getAllUsers() {
//     try {
//         const response=await fetch('https://api.github.com/users/Aditya-Tiwari2005')
//         // console.log(response);
//         const data=await response.json() //this conversion also takes time so we have to use await
//         console.log(data);
//     } catch (error) {
//         console.log("Error");
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/Aditya-Tiwari2005')
.then((response)=>{
    return response.json()
})
.then((data)=>{ //handling the upper returned response as data
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})