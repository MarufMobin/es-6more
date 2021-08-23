const fish = { id: 58, name: 'king Hilsha', price: 9000, phone: "014552000152", address: "kalapani", dress: 'silver'};


// using old way to find array proparty's value;
/* 
const phone = fish.phone;
const id = fish.id;
const dress = fish.dress; */

// using ES-6 find object property's Value;

const {phone, id, address, dress} = fish;

console.log(phone);

// Multiple Object define and spacific data need
/* 
const company = {
    name: 'Gp',
    ceo: { ceoId: 1, name:'Ajmol',food: 'fuchka' },
    web: { work: 'website Devlopment', employe: 22, frameWork: 'react'}
}; */

// Old Way to find array value in object
/* 
const work = company.web.work;
const ceo = company.ceo.name;
 */

// Using ES-6 to find nested Object property and Value

/* 
const {employe} = company.web;
const { food , ceoId } = company.ceo;
console.log(employe,food,ceoId) */

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

// const {fistItem,secondItem} = company.web.tech;
const {jsFremeWorkTwo} = company.web.tech.forthItems;
console.log(jsFremeWorkTwo);