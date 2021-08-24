class TeamMembers{
    name;
    address;
    constructor(name , address){
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMembers{
    
    designation;
    constructor( name, address, designation){
        super(name, address);
        this.designation = designation;
    }
    startSession(){
        console.log(this.name,'Say, Yess This is Session Time');
    }
    
}

class StudentCare extends TeamMembers{

    designation = "Care Of Our Student";
   constructor( name, address){
       super(name, address);
   }
    builARoutin(student){
        console.log(this.name , "please Make a Routin for the", student)
    }
}

class NeptuneDev extends TeamMembers{

    designation = "Maintain Neptune App";
    constructor( name, address){
        super(name,address);
    }
    reliseApp(version){
        console.log( this.name , "please Make a Routin for the", version )
    }
}

const firstPerson = new Support("maruf","mirpur", "Support Member");
// console.log(firstPerson)
// const secondPerson = new NeptuneDev( "Rocky", "Dhaka BD");
// console.log(secondPerson)

// const thirdPerson = new StudentCare('Mukit', "Kalsi");
// thirdPerson.builARoutin('rocky')
// console.log(thirdPerson)



class GlobalProductss{
    nameOfProduct;
    productQuentity;
    productDiscount;
    productSlNum;

    constructor( nameOfProduct, productQuentity, productDiscount, productSlNum ){
      this.nameOfProduct = nameOfProduct;
      this.productQuentity = productQuentity;
      this.productDiscount = productDiscount;
      this.productSlNum = productSlNum;
    }
}

class productOfTshirt extends GlobalProductss{

    prodcutLocation;

    constructor( nameOfProduct, productQuentity, productDiscount, productSlNum, prodcutLocation){

        super(nameOfProduct, productQuentity, productDiscount, productSlNum);

        this.prodcutLocation =  prodcutLocation;

    }
}


const resultOfProduct = new productOfTshirt( 'Samsung Phone', '15 pcs', '30% off', 'Sl num : 5',"Dhaka" );

const secondProduct = new productOfTshirt( 'Shawni Phone', '50 pcs', '30% off', 'Sl num : 8',"Dhaka" );

const thirdProduct = new productOfTshirt( 'iphone Phone', '10 pcs', '30% off', 'Sl num : 1',"Dhaka" );

// console.log(resultOfProduct) 
// console.log(secondProduct) 
// console.log(thirdProduct) 
 