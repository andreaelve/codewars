// This time we want to write calculations using functions and get the results. 
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical 
// operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, 
// the most inner function represents the right operand
// Division should be integer division. 
// For example, this should return 2, not 2.666666...:

const doMath = (operation, num1) => {
  const operator = operation.match(/[^0-9]/)[0];
  const num2 = parseInt(operation.match(/[0-9]/));
  switch (operator) {
    case('*'):
      return (num1*num2);
    case('/'):
      return parseInt(num1/num2);
    case('+'):
      return (num1+num2);
    case('-'):
      return (num1-num2);
    default:
      return 'invalid';
  }
}

const zero = (operation) => operation ? doMath(operation, 0) : 0;

const one = (operation) => operation ? doMath(operation, 1) : 1;

const two = (operation) => operation ? doMath(operation, 2) : 2;

const three = (operation) => operation ? doMath(operation, 3) : 3;

const four = (operation) => operation ? doMath(operation, 4) : 4;

const five = (operation) => operation ? doMath(operation, 5) : 5;

const six = (operation) => operation ? doMath(operation, 6) : 6;

const seven = (operation) => operation ? doMath(operation, 7) : 7;

const eight = (operation) => operation ? doMath(operation, 8) : 8;

const nine = (operation) => operation ? doMath(operation, 9) : 9;  

const plus = (num) => `+${num}`;

const minus = (num) => `-${num}`;

const times = (num) => `*${num}`;

const dividedBy = (num) => `/${num}`;


console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); //5
console.log(six(dividedBy(two()))); // 3
