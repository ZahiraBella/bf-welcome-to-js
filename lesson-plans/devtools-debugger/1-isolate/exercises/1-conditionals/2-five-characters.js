'use strict';
 let input='hello';

 input = prompt('enter something with 5 characters:');
 input='hello';
 console.log('input',input);

let message = '';
if (input === null){
  message = ':(';
} else if (input.length < 5) {

  message = 'too short';
} else if (input.length === 5) {
  message = 'thank you!';
} else {
  message = 'too long';
}

if (message !== ':(' && message !== 'thank you!') {
message = 'Invalid input!';
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/

