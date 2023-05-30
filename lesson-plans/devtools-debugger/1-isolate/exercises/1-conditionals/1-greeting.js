
'use strict';

let firstname = prompt('Please enter your firstname');
let lastname = prompt('Please enter your lastname');

let message = '';

if(firstname && lastname){
message='hello ' + firstname+ ' ' +lastname +'!';

}
else{
  message='you didn\'t enter your firstname or lastname';

}
alert(message);




/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
