const numbers = [ 3, 35, 32, 21, 63, 13, 54, 14, 35, 16];
// const largerNumber = numbers.filter(number => number > 20);
const smallerNumber = numbers.filter( number => number < 10 );
// console.log(smallerNumber);
// console.log(largerNumber);



const products = [
    { name : 'water Bottol', price: 50, color: 'yellow'},
    { name : 'Mobile Phone', price: 15000, color: 'Black'},
    { name : 'Smart Watch', price: 300, color: 'Black'},
    { name : 'Sticky Note', price: 30, color: 'Pink'},
    { name : 'Js Book', price: 800, color: 'White'}
];

// const productPrice = products.filter( product => product.price > 100);

const productColor = products.filter( product => product.color.toLowerCase() == "black");
// console.log(productPrice);
// console.log(productColor);

const whiteItems = products.find( product => product.color.toLowerCase() == 'pink');

// console.log(whiteItems);
/* 
filter as a array dei tar joto sorto satisfectional bhabe puron hoi sob guli k akta array te dibe ar sorto puron na hoi taile ( [] ) => empty Array dibe ar paile ba sorto puron hole sob guli akta Array te dibe */

/* 
find hoce jodi tar sorto full fill na hoi undefined diye day ar jodi sorto full fil hoi taile akta single element dibe. first ar ta  */