import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: ReferenceError
  message: doesExist is not defined

  location: app.js:35

  life cycle: execution 

  the mistake: doesExist was not declare it 

  the fix(es):  declare the variable 'doesExist' with let
*/

whenFormDataChanges('search-input', () => {
  console.log('--- form data changed ---');



  // --- read the user's input ---

  let searchThis = readString('text');
  let findThis = readString('query');

  let caseSensitive = readBoolean('sensitive');

  // --- do the search ---

  let doesExist = false;

  if (caseSensitive) {
    doesExist = searchThis.includes(findThis);
  } else {
    let smallSearchThis = searchThis.toLowerCase();
    let smallFindThis = findThis.toLowerCase();
    doesExist = smallSearchThis.includes(smallFindThis);
  }

  // --- create the message ---

  let message = '';

  if (doesExist) {
    message = 'yes';
  } else {
    message = 'no';
  }

  // --- display the search results ---

  displayString('search-result', message);
});
