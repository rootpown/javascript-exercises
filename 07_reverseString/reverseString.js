const reverseString = function(str) {
    // return str.split('').reverse().join('');
        let result = '';
        for ( let i = str.length - 1; i >= 0; i--) { 
            result += str[i];
        }
        return result

};
reverseString('hello');
// Do not edit below this line
module.exports = reverseString;
