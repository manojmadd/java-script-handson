// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// Global scope ke pollution se problem hoti hai
// kai baar to use global scope ke jo variables hai jo
// jo bhi wha decl
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    // jab do iife likhna ho tab semi colon ke liye error aayega first code ko end hina chahiye phir dusra wala execute hota hai.
} )('hitesh')
