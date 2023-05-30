'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = text.split('').join('-');

// let hyphen='';

// for (let nextChar of text) {
//   doubled = doubled + hyphen+nextChar;
//   hyphen='-';
//   console.log(doubled);
// }


alert(doubled);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
