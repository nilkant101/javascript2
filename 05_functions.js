
function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("L");
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
//}

// function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
//     return number1 + number2
// }
 
// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = ""){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage(''))
// console.log(loginUserMessage("nil"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //400
console.log(returnSecondValue([200, 400, 500, 1000]));