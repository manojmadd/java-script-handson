// // Array

// const myArr = [0,1,2,3,4,5]

// const myHeros = ["Loki",'Thor']


// //Array methods

// // myArr.push(6)
// // myArr.pop()// it will remove the last value

// // myArr.unshift(9)// 9 will insert in the starting of the array

// // myArr.shift(9)//remove the first value in the array
// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(9));
// // const newArr = myArr.join()
// // console.log(myArr);
// // console.log(newArr);

// // Slice, splice -- kaun sa operation original array ko manupulate krta hai aur kaun se ko nhi karta hai
// console.log("A", myArr);
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2)

const marvelHeros = ["thor","ironman","spiderman"]
const dc = ["Flash", "Robin", "Batman"]

// marvelHeros.push(dc)
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dc)
// console.log(allHeros);

const all_new_heros = [...marvelHeros, ...dc]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5],[7[6,7]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);