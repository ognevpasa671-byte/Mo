'use strict';

function splitWords(str) {
  if (typeof str !== 'string') return [];
  return str.trim().split(/\s+/);
}

console.log(splitWords('  Привет   мир  ')); 
console.log(splitWords(12345));              
