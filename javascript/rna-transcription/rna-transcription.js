var DnaTranscriber = function() { };

DnaTranscriber.prototype.toRna = function(str) {
    
    var toRnaDict = {'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A'};

    return str.split('')
              .map(function(nuc) { return toRnaDict[nuc]; })
              .join('');
};

DnaTranscriber.prototype.toDna = function(str) {
    
    var toDnaDict = {'C': 'G', 'G': 'C', 'U': 'A', 'A': 'T'};
    
    return str.split('')
              .map( function(nuc) { return toDnaDict[nuc]; } )
              .join('');
};

module.exports = DnaTranscriber;