var Anagram = function(word) {
  this.word = word.toLowerCase();
};

Anagram.prototype.matches = function(wordList) {

    if ( !Array.isArray(wordList) ) {
        wordList = Array.prototype.slice.call(arguments);
    }
  
  var that = this;
  
  return wordList.filter(function(matchWord) {
    
    matchWord = matchWord.toLowerCase();
    if (that.word === matchWord) {
      return false;
    }
    var lettersRemaining = that.word.split('');
    var matchLetters = matchWord.split('');

    lettersRemaining = lettersRemaining.filter(function(letter) {
      var matchPosition = matchLetters.indexOf(letter);
      if (matchPosition !== -1) {
        matchLetters.splice(matchPosition,1);
        return false;
      }
      return true;
    });

    if (lettersRemaining.length === 0 && matchLetters.length === 0) {
      return true;
    }
    return false;
  });
};

module.exports = Anagram;