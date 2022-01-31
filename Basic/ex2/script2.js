// ex 2 | Highest value in an array
// Create a program to find the highest value in an array. 

// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

arr = (1, 7, -3, 9);
console.log(Math.max(arr));


function getArrayMax(array){
    return Math.max.apply(null, array);
 }
 function getArrayMin(array){
    return Math.min.apply(null, array);
 }
 var ages=[1, 7, -3, 9];
 var maxAge=getArrayMax(ages); 
 var minAge=getArrayMin(ages); 

 console.log(maxAge);
 console.log(minAge);
 
// function biggestNumberInArray(arr) {
//     const max = Math.max(1, 7, -3, 9);
//     return max;
//   }
