var Pangram = function(str) {
    this.strLower = str.toLowerCase();
};

Pangram.prototype.isPangram = function() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    for (var i = 0; i < alphabet.length; i++) {
        if (this.strLower.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
};

module.exports = Pangram;