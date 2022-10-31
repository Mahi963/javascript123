/* what is constructor ? 
    it is a special method to initialize the object values
    it will execute atuomatically at time of object creation 
    */
class Sav_account{
    min_balance = 444
constructor(a,b,c){ 
   /* we  cannot use two constructors in class */
    console.log('constructor executing sucessfully')
    this.name=a
    this.salary=b
    this.Id=c

}
get_details(){
    console.log(`emp=${this.name}`)
}
}
let c3=new Sav_account('MAHESH', 444,101)
let c4=new Sav_account('Naresh',222,102)
console.log(c3)
console.log(c4)
c3.get_details()