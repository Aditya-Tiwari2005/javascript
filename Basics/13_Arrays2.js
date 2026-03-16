// Array part 2

// push() adds the entire dc_heros array as a single element to marvel_heros.It does not merge the arrays.
const marvel_heros = ["Thor","Ironman","Spiderman","Dr strange"]
const dc_heros = ["Batman","Superman","Flash","Green Latern"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//to access value in the array
// console.log(marvel_heros[4][0]);
// console.log(marvel_heros[4][1]);
// console.log(marvel_heros[4][2]);

//merging two arrays using concat
//it returns a new array along with all values

// const all_heros=marvel_heros.concat(dc_heros);
// console.log("all_heros")
// console.log(all_heros);

// to merge two arrays we can also use spread method.The spread operator (...) allows an iterable (like an array, string, or object) to be expanded into individual elements.

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros);

//The .flat() method is used on arrays to flatten nested arrays into a single array, a method to handle array inside array it will print the nested array in flat array.we have to pass the argument that how much deeper we want to go and we can generally give infinite value (trick).we can create a new array to return the ans by storing the value in it or we can directly call this method.

const another_array =[1,2,3,[4,5,6],5,[54,3,4,3,[34,54,65]]]
const real_arr = another_array.flat(Infinity)
console.log(real_arr);


// To check that anything is array or not.
console.log(Array.isArray("Aditya"));
 
// To convert anything to array method is-> Array.from();
console.log(Array.from("Aditya"));

// Array.from() creates a new array from: Array-like objects (things with a length property, e.g. {length:3})Iterables (like strings, sets, maps, etc.).

console.log(Array.from({name:"Aditya"}));

//If we have to create a array of two three given elements so we can use this method -> Array.of();
let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4));


