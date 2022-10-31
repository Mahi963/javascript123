// class account{
// min_balance=444

// }
// class SA extends account {}
// class CA extends account{
//     min_balance=2222
// }
// let c4= new SA
// let c5= new CA
// console.log(c4.min_balance,c5.min_balance)

class Parent {
    assets1 = "100 CR"
}
class Child extends Parent {
    assets = "Good Fellow"
}


let c1 = new Child()
console.log(c1.assets)