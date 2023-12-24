// console.log(2>1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*

The reason is that an equality check == and comparisions ><>=<= work differently.
comparisions convert null to a number, treating it as 0.
Thats why (3) null>=0 is true and (1 null>0 is false)

*/

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

/*
    Note: These type of conversion will keep user in confusion so avoid this
*/


// "===" naa ki uski value ko check hai balki uske data type ko bhi check karta hai strictly check karta hai na 

console.log("1" === 1);