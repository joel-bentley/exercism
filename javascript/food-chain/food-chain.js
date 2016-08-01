var FoodChain = function () {};

FoodChain.prototype.verse = function (verseNumber) {
    
    var result = '';

    switch (verseNumber) {
        case 1:
            result += 'I know an old lady who swallowed a fly.\n';
            break;
        case 2:
            result += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n';
            break;
        case 3:
            result += 'I know an old lady who swallowed a bird.\n' +
                'How absurd to swallow a bird!\n';
            break;
        case 4:
            result += 'I know an old lady who swallowed a cat.\n' +
              'Imagine that, to swallow a cat!\n';
            break;
        case 5:
            result += 'I know an old lady who swallowed a dog.\n' +
              'What a hog, to swallow a dog!\n';
            break;
        case 6:
            result += 'I know an old lady who swallowed a goat.\n' +
              'Just opened her throat and swallowed a goat!\n';
            break;
        case 7:
            result += 'I know an old lady who swallowed a cow.\n' +
              'I don\'t know how she swallowed a cow!\n';
            break;
        case 8:
            result += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
            break;
    }
    
    switch (verseNumber) {
        case 7:
            result += 'She swallowed the cow to catch the goat.\n';
        case 6:
            result += 'She swallowed the goat to catch the dog.\n';
        case 5:
            result += 'She swallowed the dog to catch the cat.\n';
        case 4:
            result += 'She swallowed the cat to catch the bird.\n';
        case 3:
            result += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
        case 2:
            result += 'She swallowed the spider to catch the fly.\n';
        case 1:
            result += 'I don\'t know why she swallowed the fly. ' +
              'Perhaps she\'ll die.\n';
            break;
    }
  
    return result;
};

FoodChain.prototype.verses = function (start, end) {
    var result = '';
    
    for (var i=start; i<=end; i++) {
        result += this.verse(i) + '\n';
    }
    
    return result;
};

module.exports = FoodChain;