class account{
    constructor(name,email,amount){
    this.acc_name=name;
    this.acc_email=email;
    this.acc_amount=amount;
    }
}
class SA_account extends account {
    constructor(id,name,email,amount,bank_name){
        super(name,email,amount)
        this.acc_id=id;
        this.acc_bank_name=bank_name;
        
    }

}
let c2=new SA_account(101,"hari","hari@gmail.com",10000,'axis')
let c3=new SA_account(101,"suri","suri@gmail.com",550000,'hdfc')
console.log(c2);