'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      if (splitStr.length[i] < splitStr.length) {
        splitStr[i].charAt(0).toUpperCase();     
      }
         str = splitStr.join(' '); 
    }
   return str;
   }
   
  


//* Begin of tests
const assert = require('assert')
assert.strictEqual('Join The Battle', 'Join The Battle'); 

// End of tests */
