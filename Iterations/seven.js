const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// Chaining do teen method ek baar me use kar sakte hai jaise map and filter
const newNums = myNumers
                .map((num) => num * 10 )
                // Jab bhi chaining hoti hai to uper wale ka jo bhi result hai wo second chain me pas ho jata hai
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);