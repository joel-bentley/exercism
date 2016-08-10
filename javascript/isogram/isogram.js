var Isogram = function(phrase) {
  this.phrase = phrase;
};

Isogram.prototype.isIsogram = function() {

  var characters = this.phrase
      .toLowerCase()
      .replace(/[\-\s]/g, '')
      .split('');

  for (var i = 0; i < characters.length - 1; i++) {
    for (var j = i + 1; j < characters.length; j++) {

      if (characters[i] === characters[j]) {
        return false;
      }
    }
  }
  
  return true;
};

module.exports = Isogram;
