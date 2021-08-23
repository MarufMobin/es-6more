const friends = [ 'Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Brusely' ];

const fLength = friends.map( friend => friend.length );

// console.log(fLength)

const products = [
    { name : 'water Bottol', price: 50, color: 'yellow'},
    { name : 'Mobile Phone', price: 15000, color: 'Black'},
    { name : 'Smart Watch', price: 300, color: 'Black'},
    { name : 'Sticky Note', price: 30, color: 'Pink'},
    { name : 'Js Book', price: 800, color: 'White'}
];

const productName = products.map( product => product.name);

const productPrice = products.map( product =>product.price);

// jast product guli dekhar jonnow ki ki ache ta show kranor jonnow 

//array variable name (.) map ( anyVriable => console.log(anyVariable) )

// jokhon return ar Proyojon hoi tokhon map use kra 
// products.map(product => console.log(product));
// console.log(productPrice);
// console.log(productName)

products.forEach(product => console.log(product));
/* 
==> jokhon return ar Proyojon nai thokhon forEach kra ata stander ar ( map ) ta hoche j jodi return dorkar tokhon use kra */