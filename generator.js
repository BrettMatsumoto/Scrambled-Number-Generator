'use strict';

module.exports = function(n) {
  let unordered = [];
  for (let i = 0; i < n; i++) {
    unordered.push(Math.random() * n);
  }
  return unordered;
};
console.log(unordered);
