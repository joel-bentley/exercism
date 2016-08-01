var BeerSong = function() {};

BeerSong.prototype = {
    
    verse: function(num) {
        if (num > 2 && num < 100) {
            return (
                num + ' bottles of beer on the wall, ' +
                num +' bottles of beer.\nTake one down and pass it around, ' +
                (num-1) + ' bottles of beer on the wall.\n'
            );
        } else if (num === 2) {
            return (
                '2 bottles of beer on the wall, 2 bottles of beer.\n' +
                'Take one down and pass it around, ' +
                '1 bottle of beer on the wall.\n'
            );
        } else if (num === 1) {
            return (
                '1 bottle of beer on the wall, 1 bottle of beer.\n' +
                'Take it down and pass it around, ' +
                'no more bottles of beer on the wall.\n'
            );
        } else if (num === 0) {
            return (
                'No more bottles of beer on the wall, ' +
                'no more bottles of beer.\nGo to the store and buy some more, ' +
                '99 bottles of beer on the wall.\n'
            );
        } else {
            throw 'Invalid verse number.';
        }

    },
    
    sing: function(start, end) {
        if (end === undefined) {
            end = 0;
        }
        
        var result = '';
        
        for (var i = start; i > end; i--) {
            result += this.verse(i) + '\n';
        }
        result += this.verse(end);
        
        return result;
    }
};

module.exports = BeerSong;