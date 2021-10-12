let numArray = Array.from(Array(10).keys());

let alphaNumbers = Array.from(Array(26)).map((e, i) => i + 65);
let alphabets = alphaNumbers.map((x) => String.fromCharCode(x));
let alphaNum = [];
function alphabetPosition(text) {
    let charArr = text.split('');
    let newString = [];
    let str = '';
    charArr.forEach(function (char) {
        if (alphabets.includes(char.toUpperCase())) {
            alphaNum.push(alphabets.indexOf(char.toUpperCase()) + 1);
        }
    });

    str = alphaNum.join(' ');
    return str;
}