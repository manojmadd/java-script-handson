const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); 
        //current context ko refer kar rhe ho to uske liye ham lagate hai this keyword 
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); yha pe empty object aayega kyunki global ke andar koi context hi nhi hai
// kyunki ham. node env ke andar hai 
// browser ke andar ko global object hai wo window hai whi sabse jyada use hota hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); undefined aayega main kewal object ke andaar hi kar paa rha hun
// function ke andar nhi kr pa rha hun 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// same undefined 
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    // yha pe bhi undefined hai 
    // 
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 -- explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 --implicit return- main man leta hun kyunki aapko return likhane ki ajrurat nhi hai

// const addTwo = (num1, num2) => ( num1 + num2 ) --agar small bracket me lika tab return use nhi karna padega aur agar curly bracket lga rhe hai tab aapko return likhana padega 

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()