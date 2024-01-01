//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

//{} scope hai jab kisi fnction ke sath aata hai au
// var ko avoid is liye karte hai kyunki uska scope global hota hai
// block scope aur global scope 



// console.log(a);
// console.log(b);
// console.log(c);

// Nested scope
// Line by line execution hota hai Java script me

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//yha pe error aa rha hai jab aati hai jab aap fn ko kis tarah se declare kar rhe hai kyunki ye ek variable me hold kar rha hai hosting
const addTwo = function(num){ // ye ek expression hai
    return num + 2
}
