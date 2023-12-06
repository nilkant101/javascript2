var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //console.log("INNER: ", );
}

// console.log(a);
// console.log(b);
// console.log(c);
    




function one(){
    const username = "nilu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()
   }
    one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// 1


console.log(addone(5))
function addone(num){
    return num + 1
}

// 2   addTwo ( veriable he finction expression ahe we can not acces like calling before function its concept of HOISTING )

addTwo(5)
const addTwo = function(num){
    return num + 2
} 