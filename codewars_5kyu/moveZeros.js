// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const newArray = arr.filter(el => el !== 0);
  arr.forEach(el => el === 0 && newArray.push(el));
  return newArray;
}

function moveZeros2(arr) {
  return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0));
}



console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
console.log(moveZeros2([false,1,0,1,2,0,1,3,"a"]));