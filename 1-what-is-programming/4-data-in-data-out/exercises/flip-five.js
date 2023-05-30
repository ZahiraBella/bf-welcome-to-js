'use strict';

/* Flip Five

  Data In:


  Data Out:


  Test Cases:


*/

/* --- gather user input --- */
//declare the variable and init with the a null value 

let input = null;
console.log('input type',typeof(input));
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';

for (let character of input) {
  console.log(character);
  message = character + message;
  console.log(message);
}
console.log(message);

/* --- display the message --- */

alert(message);
