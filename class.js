class Support{
    name;
    address;
    constructor(name , address){
        this.name = name;
        this.address = address;
    }
    designation = 'Web Devloper Support Team';
    startSession(){
       // console.log(this.name,'Say, Yess This is Session Time');
    }
    
}

const fistMentor = new Support( "Maruf", "Mirpur Dhaka" );
const secondMentor = new Support( "Mobin", "Mirpur Dhaka" );
fistMentor.startSession()

// console.log(fistMentor,secondMentor);


class MakeCake{
    name;
    address;
    designs = "Gol, Lomba, squere";
    constructor( name , address ){
        this.name = name;
        this.address = address;
    }
    startMakeCake(){
        //console.log(this.name,"R jonnow aktu wait krte hbe :) ");
    }
}

const jamalArMa = new MakeCake( 'Bapa Pitha', 'TSC Mor' );
jamalArMa.startMakeCake()
// console.log(jamalArMa)


class GotoDistic{
    name;
    price;
    time;
    location;
    driverName;

    constructor(name,price,time,location,driverName){
        this.name = name;
        this.price = price;
        this.time = time;
        this.location = location;
        this.driverName = driverName;
    }
    startEngine(){
        console.log( this.name, "Start the Bus Engine");
    }
}

const firstDriver = new GotoDistic("Hanif", "800 taka", "Sokal 11 ta", "Bogura ShatMatha", "josim Bhai" );
const anotherDriver = new GotoDistic("Green Li9", "1000 taka", "Sokal 10 ta", "Bogura ShatMatha", "Mofij Bhai" );

firstDriver.startEngine()
// console.log(firstDriver);
// console.log(anotherDriver);