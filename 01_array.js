// array

const myArr = [0, 1, 2, 3, 4, 25]
// console.log(myArr[5]);  //25

const myHeors = ["vijay","salman"]


const myArr2 = new Array(1, 20, 3, 4.33)
// Array methods

// myArr.push(2)
// myArr.push(7)
// myArr.pop()//last value remove
// console.log(myArr);

// myArr.unshift(9) //start add
// myArr.shift()

// asking like a question 

// console.log(myArr.includes(9)); //false
//  console.log(myArr.indexOf(3)); //3

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);//join  convert into a string
//0,1,2,3,4,25


// slice, 
// splice//original array manipulate 

console.log("A ", myArr);//[ 0, 1, 2, 3, 4, 25 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[ 1, 2 ]

console.log("B ", myArr);//[ 0, 1, 2, 3, 4, 25 ]


const myn2 = myArr.splice(1, 3)
console.log(myn2);//[ 1, 2, 3 ]

console.log("C ", myArr);//[ 0, 4, 25 ] //





