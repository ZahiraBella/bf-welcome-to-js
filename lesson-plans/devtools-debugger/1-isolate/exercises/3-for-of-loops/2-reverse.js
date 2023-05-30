'use strict';

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;

  console.log('reverse',backwards);
}

let words = '';
for (let nextChar of backwards) {
  words = nextChar + words;
}

console.log('wards',words);

let transformation = toReverse + ' -> ' + backwards + ' -> ' + words ;

alert(transformation);

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/
