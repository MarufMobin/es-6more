// j know array ar j numbers guli ache tar dubble kre arek ta array te rakte hobe tokhon ai way te kra jete pare 
/* 
const nums = [ 2, 4, 6, 8, 10 ];
const output = [];
for( const num of nums ){
    const result = num * 2;
    output.push(result);
}
console.log(output) */


// Using fanction to get 2 times of array value

function square(nums){
    const result = [];
    for( const num of nums ){
       const number =  num * 2;
        result.push(number);
    }
    return result;
}

const nums = [ 2, 4, 6, 8, 10 ];
// console.log(square(nums));

// using arrow function to define 2 time vlue of array

const x = x => x * 2;
const arrowFunction = [ 2, 4, 6, 8, 10 ];
const result = [];
for( const num of arrowFunction ){
   result.push( x(num));
}
// console.log(result);

// jankar Mahbub Sir 
const numbers = [ 2, 6, 8, 10 ];
const output1 = [];

// Older way to use function
/* 
function doubleOld(number){
    return number * 2;
} */

const doubleOld = number => number * 2;

const findNumber = [];
for(const number of numbers){
    const result = doubleOld(number);
    findNumber.push(result);
}
// console.log(findNumber)

const arrNum = [ 3, 6, 9, 12, 15 ];

const num = num => num * 2;

const arrResult = [];

for( const numbers of arrNum ){
    arrResult.push( num(numbers) );
}
// console.log(arrResult;

// Array ar joto element ache sob guli k 2 diye gun krar jonnow (marp) chara kaj krle 3 ta step a kaj krte hoto

/* 
1. loop through each element
2. for each element call the provided function
3. result for each element will be stored in an array */

// Using map to define array 2 times

/* 
const mapNum = [ 3, 6, 9, 12, 15 ];
const mapArr = numMap => numMap * 2; 
const  output = mapNum.map(mapArr); // ==> One way to declare 
console.log(output); */

const mapNum = [ 3, 6, 9, 12, 15 ];
// const mapArr = numMap => numMap * 2; 
const  output = mapNum.map( numMap => numMap * 2); // ==> Second way to declare 
// console.log(output);

// using map find out squere number 
const mapNum2 = [ 3, 6, 9, 12, 15 ];
const squre = (x) => x * x;
const ansSqr = mapNum2.map(squre);
// console.log(ansSqr)
