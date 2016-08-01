var WordCount = function() {};

WordCount.prototype.count = function(phrase) {

  var result = {};

  var leading = /^[\s\n\t]+/;
  var trailing = /[\s\n\t]+$/;
  var splitChars = /[\s\n\t]+/;

  var words = phrase
      .replace(leading, '')
      .replace(trailing, '')
      .toLowerCase()
      .split(splitChars);

  words.forEach(function(word) {

    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  })

  return result
};

module.exports = WordCount
