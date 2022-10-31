class car{
 
    setname(name){
     this.name=name
    }
    startengine(){
        console.log('engine starts for '+ this.name)
    }
    stopengine(){
        console.log('engine stop for '+ this.name)
    }
}

    class audi extends car{

        topspeed(speed){
            console.log('top speed for this '+  this.name +'  is  '+speed)
        }
        }
        let mycar = new audi 
        mycar.setname('ferrai')
        mycar.startengine()
        mycar.stopengine()
        mycar.topspeed(394)
    






