let myName="Aditya"
console.log(myName.truelength);
// creating a method that can return the truelength of the string without spaces.

let myHeros=["thor","spiderman","flash"]
let heroPower={
    thor:"Hammer",
    spiderman : "web",

    getspidyPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// adding a property in the top level hierarchy so that array,string and function every one can have it
Object.prototype.Aditya=function(){
    console.log('Aditya is present in all objects');
}
// if defined for only one object like array then it cannot have it by others.using protoype we can add new methods in the object. 
Array.prototype.heyAditya=function(){
    console.log(`Aditya says hello`);
}
// heroPower.Aditya()
myHeros.heyAditya()
heroPower.heyAditya()



// inheritance

const Teacher={
    makeVideo:true
}
const TeachingSupport ={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

//mordern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

// new method
const anotherUsername ="Aditya    "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`the truelength is: ${this.trim().length}`);   
}
// anotherUsername.truelength()
"Adityaaaaa".truelength()