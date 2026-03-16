// in this parameters assuming that they are of number data type 

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// addTwoNumbers(3,4)
//  way 2
function addnumber(num1,num2){
    return num1+num2
}
const result = addnumber(4,3);
console.log(result);


// if u doesn't pass an argument then it will take the by default name as sam and print it and if u passed an username then it will overwrite it 
function loginUserMessage(username ="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Aditya"));


// if a cart having more number then we have a problem we are getting a only the first value
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));

// so if the cart having more values then we can do this to print all the element
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));
// this operator named as rest and spread depending upon the use cases

// we can do this also
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,500,2000,300000));
// in this the val1 =200,val2=500, then ...num1=2000,300000.this is all about it.


const user={
    username: "Aditya",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

// yeh upr wala function call kara hai object pass krke aur ussko call kara hai with arguments. 
handleObject({
    username:"sam",
    price:800
})
// to get any number from any index from the array

const mynewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArray)); 
 