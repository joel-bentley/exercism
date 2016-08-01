var Bob = function() {};

Bob.prototype.hey = function(input) {

  var silence = /^\s*$/.test(input);
  var statingSomething = /\.$/.test(input);
  var onlyNumbers = !/[A-Za-z]/.test(input);
  var question = /\?$/.test(input);
  var umlauts = /[\xfc\xe4\xdc]/.test(input);
  var shouting = /!$/.test(input);
  var forceful = input.toUpperCase()===input;


  if (silence) {
    return 'Fine. Be that way!';
  }

  if (statingSomething) {
    return 'Whatever.';
  }

  if (onlyNumbers) {
    if (question) {
      return 'Sure.';
    }
    return 'Whatever.';
  }

  if (umlauts && !shouting) {
    return 'Whatever.';
  }

  if (forceful) {
    return 'Whoa, chill out!';
  }

  if (question) {
    return 'Sure.';
  }

  if (shouting) {
    return 'Whatever.';
  }
};

module.exports = Bob;