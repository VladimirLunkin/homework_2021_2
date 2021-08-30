'use strict';

function reverseString(str) {
  return str.split("").reverse().join("");
}

function letters(str, direction) {
  if (direction === false) str = reverseString(str);

  let newStr = "";

  for (let i = 0; i < str.length; ++i) {
    if (str.indexOf(str[i], i + 1) == -1 || direction != undefined) {
        newStr += str[i];
    }

    const regexp = RegExp(`[${str[i]}]`, 'g');
    str = str.slice(0, i + 1) + str.slice(i + 1).replace(regexp, '');
  }

  if (direction === false) newStr = reverseString(newStr);

  return newStr;
}
