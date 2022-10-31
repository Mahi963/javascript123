let wish=()=>{
console.log(77)
}
wish()

//with parameters and arguments
let add=(a,b,c)=>{
console.log(a+b+c)
}
add(666,777,888)

/// with return statement

let ham =(a,b,c)=>{
    return a+b+c+777
}
let r1=ham(55,66,22)
console.log(r1)
 
// with implict function
 // if function has only statement we can use implicit function
let sam =msg=> 'hello'+ msg
let r2=sam('mahi')
console.log(r2)

// over riding conflicts

let sos =(a,b)=>
{
return a+b }
let r4=sos(77,33)

console.log(r4)


////
 //over riding conflicts is resolved by fat arrow function

var hhhh=()=>{
console.log('gm')
}
hhhh()

var hhhh=()=>{
    console.log('gn')
    }
    hhhh()


    // conflict is happening in normal function

    function  hhhh (){
        console.log('gm')
        }
        hhhh()
        
        function hhhh(){
            console.log('gn')
            }
            hhhh()