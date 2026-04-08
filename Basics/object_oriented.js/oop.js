const user={
    username : "Aditya",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
    }
}
console.log(user.username);
console.log(user.getUserDetails());
 


// constructor function

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this //this is not compulsory because it is implicitly done
}
const Userone = new User("Aditya",23,true) //if we do not use the new keyword so everytime we create new user it will overwrite even if we didn't printed it.
console.log(Userone.constructor);
const UserTwo = new User("Kashvi",3,false) 
console.log(UserTwo);

function User(username,loginCount,isLoggedIn){
    this.username=username //this tells current persepective 
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this
}
// this does not create a new user it modifies the old user
const userOne = User("Aditya",12,true)
const userTwo = User("Kashvi",122,true)
console.log(userOne);


