// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array){
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'];
    const lowerAlphabet = alphabet.map(el => el.toLowerCase());
    if(array){
        let start = alphabet.findIndex(element => element == array[0]);
        if(start == -1){
            start = lowerAlphabet.findIndex(element => element == array[0]);
            for(let char in array){
                if(array[char] != lowerAlphabet[(start+parseInt(char, 10))]) return lowerAlphabet[(start+parseInt(char, 10))];
            }
        }
        for(let char in array){
            if(array[char] != alphabet[(start+parseInt(char, 10))]) return alphabet[(start+parseInt(char, 10))];
        }
    }
    return ' ';
}
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));