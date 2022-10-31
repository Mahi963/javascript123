
/* function wish () {
    console.log("test")
}
wish()

function wish () {
    console.log("testss")
}
wish() */
// The above line output is :testss
                          //:testss 
 //because in function over riding the conflicts is not working
                            

var wish =()=> {
    console.log("test")
}
wish()
var wish =()=> {
    console.log("testss")
}
wish()
// The above line output is :test
                          //:testss 
 //because in fat Arrow function over riding the conflicts is  working