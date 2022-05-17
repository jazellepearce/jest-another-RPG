module.exports = function(val1, val2) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  };

  const randomNumber = require('../lib/random.js');

  function randomNumber() {
    return Math.floor(Math.random() * 9 + 1);
  }
  
  module.exports = randomNumber;

  const Potion = require('../lib/Potion.js');