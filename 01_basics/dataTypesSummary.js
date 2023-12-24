// # Type of data

// Primitive 
// 7 types : String, Number, boolean, null, undefined,Symbol, BigInt- Call by value hote hai means jab aap bhi koi data copy karte hai to inka jo original data hai wo reference aapko memory ka nhi diya jata hai inko copy karke aapko diya jata hai usko copy karke diya jata hai usme aapka ho gya number string 

// dynamically type hai ya statically type lang ? type of variable? const score = 100 ham java script ke andar lan ko defined  nhi karte hai

//Reference(Non primitive) ye sari values wo hai ki memeory me inka reference directly allocate kiya jaa sakta. hai 
// Array, Objects, Functions

const heros = ["Iron man", "Robin"]
let myObj=
{
    name: "manoj",
    age:22,

}

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof myFunction);