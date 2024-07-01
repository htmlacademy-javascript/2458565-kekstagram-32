//1
function getFunctionLength(string, length) {
  return string.length <= length;
}

getFunctionLength('qqq', 20); // true
getFunctionLength('wwwwwww', 18); //true
getFunctionLength('wwwwwwwwwwwwwwwwwwwwwwwww', 10); //false

// 2

const getPalindrome = (string) => {
  const normalizeString = string.replaceAll(' ', '').toUpperCase();
  let palindromeString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    palindromeString += normalizeString[i];
  }
  return palindromeString === normalizeString;
};

getPalindrome('Кекс');//false
getPalindrome('ДоВоД');//true
getPalindrome('топот'); //true
getPalindrome('А роза упала на лапу Азора'); //true

//3-1 (доп.)

const getNumber = function(string) {
  string = String(string);
  let numberString = '';

  for (let i = 0; i <= string.length; i++) {
    if (!Number.isNaN(Number(string[i])) && string[i] !== ' ') {
      numberString += string[i];
    }
  }
  return numberString ? Number(numberString) : NaN;
};

getNumber('2023 год'); // 2023
getNumber('ECMAScript 2022'); // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007'); // 7
getNumber('а я томат'); // NaN
getNumber(2023); // 2023
getNumber(-1); // 1
getNumber(1.5); // 15


