let a=800//global
if(true){//block scope
    let a=499
    const b=244
    console.log("Inner",a);
}
console.log(a);




// new part
function one(){
    const username="hitesh"
    // global for function two so it can access it
    function two(){
        const website="youtube"
        console.log(username);
    }
    // cannot access it because its in a block of scope;
    // console.log(website);
    two()
}
one()

//+++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++

