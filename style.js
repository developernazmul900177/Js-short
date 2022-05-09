//latter 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const result = fruits.sort();
// console.log(result);



//small to big number

// const points = [40, 100, 1, 5, 25, 10];
// const result = points.sort(function(a,b){
//     return a - b;
// });
// console.log(result);


//big to small

// const points = [40, 100, 1, 5, 25, 10];
// const result = points.sort(function(a,b){
//     return b - a;
// });
// console.log(result);


//leap year

// function leapYear(year){
//     if((year % 400 ===0 ) || ((year % 4 === 0) && ( year % 100 !== 0))){
//         console.log(year, " is a leap year");
//     }else{
//         console.log(year, " is not a leap year");
//     }
// }
// leapYear(1600);




const numbers = [1,2,3,4,5,6,7,8,9,3,22,42,3,2,4,6,7];

const dublicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !==  index;
})
console.log(dublicates);