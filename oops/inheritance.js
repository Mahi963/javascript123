/* what is inheritance ?
    Reuseing the existing code and adding new functionality
and inheritance the properties and methods from parent(one)class to child(second)class
what is the adv of inheritance ?
   reusing the existing code */
class Account {
constructor(name,id){
console.log("parent account")
this.name=name
this.id=id
}
}
class Sav_account extends Account{
    /* the above line 'extends'keyword is used to inherit the
    poperties and methods from parent(one)class to child(second)class 
    and also it avoids the overding between the constructors
    when we use two are more class */
    min_bal=5000
constructor(name,id,bal){
    console.log("child class 2")
    super(name,id)
    this.bal=bal
    /* The above line "this"keyword ?
     this is a pointer reffering to current object  */
}
get_bal(){
    return this.bal - this.min_bal
}
}
let c1=new Sav_account('mahesh',101,50000)
console.log(c1)
console.log(c1.get_bal())
class Cur_account extends Account{
    min_bal=4000
constructor(name,id,bal){
    console.log("child class 2")
    super(name,id)
    this.bal=bal
}
get_bal(){
    return this.bal - this.min_bal
}
}
let c2=new Cur_account('Shesh',102,20000)
console.log(c2)
console.log(c2.get_bal())