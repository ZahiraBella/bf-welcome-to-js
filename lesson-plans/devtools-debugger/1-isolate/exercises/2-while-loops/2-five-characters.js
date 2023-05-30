// /*  ===== Challenges =====
//   - Change the condition to 10 characters.
//   - Make the user write "everything" in 2 steps.
// */

// 'use strict';

// let input = null;
// let inputtwo = null;

// while ((input === null && inputtwo === null) || ((input !== null && input.length > 0 && (input.length+inputtwo.length)!== 10 ) || (inputtwo !== null && inputtwo.length > 0 )&& (input.length+inputtwo.length)!== 10 ))  {
// input = prompt('Enter something with 5 characters:');
// inputtwo = prompt('This is your first suggestion (' + input + '). Enter something else with 5 characters:');
// }

// let message = 'Thank you for "' + input + inputtwo + '"!';

// alert(message);

'use strict';

let partOne;
let partTwo;
let message;

while (true) {
  partOne = prompt('enter something');
  partTwo = prompt(
    ' you first suggestion ' + partOne + ' enter something else',
  );
  if (partOne.length > 0 && partTwo.length > 0) {
    message = partOne + partTwo;
    if (message.length === 10) {
      alert('thank you');
      break;
    } else {
      alert('both parts must be 10 characters');
    }
  }
}
