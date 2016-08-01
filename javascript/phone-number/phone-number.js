var PhoneNumber = function(str) {
    this.str = str;
};

PhoneNumber.prototype = {
  
    number() {
        var numbers = this.str.replace(/[^\d]/g, '');
 
        if (numbers.length === 11 && numbers.charAt(0) === '1') {
            numbers = numbers.substr(1);
        }
      
        if (numbers.length !== 10) {
            return '0000000000';
        }
      
        return numbers;
    },
    
    areaCode() {
        return this.number().substr(0,3);
    },
    
    toString() {
        var num = this.number();
        return '(' + num.substr(0,3) + ') ' + num.substr(3,3) + '-' + num.substr(6,4);
    }
};

module.exports = PhoneNumber;