'use strict';

/**
 * @function Разворачивает строку.
 * @param {string} inputStr - Строка, которую нужно развернуть.
 * @return {string} - Развернутая строка.
 */
const reverseString = (inputStr) => {
  return inputStr.split('').reverse().join('');
}

/**
 * @function Удаляет повторяющиеся символы из строки.
 * @param {string} inputStr - Строка, из которой удаляем символы.
 * @param {boolean} isFirstRepeatedChar - true оставляем первый повторяющийся, false оставляем последний повторяющийся.
 * @return {string} - Новая строка без повторяющихся символов.
 */
const letters = (inputStr, isFirstRepeatedChar) => {
  if (typeof inputStr !== 'string' && typeof inputStr !== 'number') {
    throw Error('the first argument is of type string or number');
  }

  if (!(typeof isFirstRepeatedChar === 'boolean' || typeof isFirstRepeatedChar === 'undefined')) {
    throw Error('the second argument is optional boolean');
  }

  let tempStr = isFirstRepeatedChar === false ? reverseString(inputStr) : inputStr;
  let resultStr = '';

  for (let i = 1; i <= tempStr.length; ++i) {
    const currSymbol = tempStr[i - 1];

    if (!tempStr.includes(currSymbol, i) || isFirstRepeatedChar !== undefined) {
      resultStr += currSymbol;
    }

    const regexp = RegExp(`[${currSymbol}]`, 'g');
    tempStr = tempStr.slice(0, i) + tempStr.slice(i).replace(regexp, '');
  }

  return (isFirstRepeatedChar === false) ? reverseString(resultStr) : resultStr;
}
