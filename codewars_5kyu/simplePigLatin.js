// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
    return str
        .split(' ')
        .map(word => {
            if((/[a-z]/i).test(word)){
                word += `${word[0]}ay`; 
                return word.replace(word[0], '');
            }
            return word;
        })
        .join(' ');
}

console.log(pigIt('Pig latin is cool !')); //igPay atinlay siay oolcay !
console.log(pigIt('This is my string')); //hisTay siay ymay tringsay
