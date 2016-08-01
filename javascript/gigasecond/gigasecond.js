var Gigasecond = function(birthday) {
    this.birthday = birthday;
};

Gigasecond.prototype.date = function() {
    
    return new Date(this.birthday.getTime() + 1e12);
};

module.exports = Gigasecond;