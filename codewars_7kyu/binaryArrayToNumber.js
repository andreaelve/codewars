// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    let total = 0;
    for(let int in arr.reverse()){
        total += arr[int] * Math.pow(2, int);
    }
    return total;
} 
