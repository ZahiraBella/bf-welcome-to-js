'use strict';

// Declare and initialize the variable 'a' with the value 'Ewin'
let a = 'Ewin';
// Declare and initialize the variable 'a' with the value Tugba'
// let a = 'Tugba';
// Declare and initialize the variable 'a' with the value 'Jo'
// let a = 'Jo';
// Declare and initialize the variable 'a' with the value 'Olesandra'
// let a = 'Olesandra';
// Declare and initialize the variable 'b' with the string 'Hello ' + the
let b = 'Hello ' + a + ', your name is ';

// Check the length of 'a' and determine the  message to concatenate to 'b'
if (a.length > 4) {
  // if the length of a is bigger than 4 , read b and assign b this value b + 'long.'
  b = b + 'long.';
} else if (a.length === 4) {
  // if the length of a is equal to  4 , read b and assign b this value b + 'perfect.'

  b = b + 'perfect.';
} else {
  // eslint-disable-next-line max-len
  // if the length of a is  not equal to  4 and not bigger than 4  , read b and assign b this value b = b + 'short.'

  b = b + 'short.';
}
// Read the final message stored in 'b'
console.log(b);
