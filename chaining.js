// declare variable based on the name of object property

const myObject = { x: 2, y: 33, z: 121, a: 13, b: 23 };

const {x,y,b,a} = myObject;
// console.log('myObject.p', myObject?.p?.q.g); ==>chining to catch which value ar culprit

// Array destructuring Array

/* 
const [ p , q , r ] = [ 50, 44, 223, 4, 45, 454 ];
console.log(p,q,r);

const [ best, faltu ] = [245, 455];
console.log(best, faltu)
 */

// ai way tew destructuring kra hoi
const { color, money, sky } = { sky: 'blue', money: 500, soli: 'matti', color: 'red'};

// console.log(color)

// Chaining Object

const company = {
    name: 'Gp',
    ceo: { ceoId: 1, name:'Ajmol',food: 'fuchka' },
    web: { work: 'website Devlopment', employe: 22, frameWork: 'react', tech: {
        fistItem : "html",
        secondItem : "css",
        thirdItem : "js",
        forthItems : {
            jsFremeWork : 'node',
            jsFremeWorkTwo : 'react',
            jsFremeWorkThree : 'Anglure'
        }
    }}
};


// console.log(company?.web?.frameWork)