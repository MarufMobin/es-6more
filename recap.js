// goto kal k 5 ta jinis jansi ai guli holo 
/* 
variable
*/

// 1.let and const
const myName = "Maruf";
let myAge = 21;
myAge = 22;
// 2. defaul parameter
function maxNumber( array = [] ){  //==> Default parameter;
    const max = Math.max(...array); //==> ... spread oparator;
    return max;
}
const result = maxNumber();
console.log(result)
// 3. tamplate string
const javascript = 'javascript';
const phone = 'Shawni phone';
const myNotes = `i am a mojnu of ${javascript} but
i don not have a ${phone}`;
console.log(myNotes)

// 4.Arrow Function

/* 
function square(num){
    return num * num;  ===> Normal function
} */

const square = (num) => num * num; // ==> arrow funtion arrow funtion ar 1 ta paramitar thakle ai const square = (num) => num * num; likha jai 2 ta thakle const square = (num1, num2) => num1 * num2; ar parameter na thakle const square = () => num * num; empty thakbe

const sqrResult = square(8);
console.log(sqrResult)


// 5. (...) spread oparator;
function maxNumber( array = [] ){  //==> Default parameter;
    const max = Math.max(...array); //==> ... spread oparator;
    return max;
}