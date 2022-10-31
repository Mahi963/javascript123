 /* what is class?
    class is a template to create objects
    class contains = properties and methods
    No need to mention let ,var,const,and function

    How to create object in a class?
    By using 'new' keyword  */

    /* The below line 'ICICI' is class name 
 and it is always starts with 'Capital Alphabet'*/
 
class ICICI {
min_balance=500
/* The above line 'min_balance' is  property name */
open_account(){
    /* /* The above line 'open_account' is function name */ 
    console.log("open account sucessfully")
    /* The above line No need to mention let ,var,const,and function*/
}
deposit_amount(){
    console.log('5555 is deposited')
}
withdrawl(){
    console.log('withdrawl the amount')
}
}
console.log( new ICICI())
/* The above line 'new' operator is used to create object */
let c1=new ICICI()
let c2=new ICICI()
/* The above line 'c1,c2' is a referring object to get class properties and menthods */
console.log(c1.min_balance)
console.log(c2.min_balance)
c2.open_account()
c1.withdrawl()
c2.deposit_amount()