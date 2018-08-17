// Do not edit the code below.
var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
// Do not edit the code above.

/*
  Above is an array of arrays. Use two for loops.
    1. Write a function called 'looper'. 
    2. 'looper' should loop over the arrays.
    3.  If the number is odd, replace it with 'odd'.
        If the number is even, replace it with 'even'.
    4. Return the modified numsArr.
*/
//Code Here
let looper = () => {
    for (let i = 0; i < numsArr.length; i++){
        for (let j = 0; j < numsArr[i].length; j++){
            if (numsArr[i][j] % 2 === 0) numsArr[i][j] = 'even'
            else { numsArr[i][j] = 'odd'}
        }
    } return numsArr
}