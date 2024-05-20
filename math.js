const math = {};

math.getRandomNumber = function getRandomNumber(min, max) {
    minimum = Math.ceil(min);
    maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

module.exports = math;

