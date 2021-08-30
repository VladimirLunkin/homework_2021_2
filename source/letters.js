'use strict';

/**
 * Разворачивает строку.
 * @param {string} str - Строка, которую нужно развернуть.
 * @return {string} - Развернутая строка.
 */
const reverseString = (str) => {
  return str.split('').reverse().join('');
}

/**
 * Удаляет повторяющиеся символы из строки.
 * @param {string} str - Строка, из которой удаляем символы.
 * @param {boolean} direction - true оставляем первый повторяющийся, false оставляем последний повторяющийся.
 * @return {string} - Новая строка без повторяющихся символов.
 */
const letters = (str, direction) => {
  let tempStr = (direction === false) ? reverseString(str) : str;
  let resultStr = '';

  for (let i = 1; i <= tempStr.length; ++i) {
    const currSymbol = tempStr[i - 1];

    if (tempStr.indexOf(currSymbol, i) == -1 || direction != undefined) {
        resultStr += currSymbol;
    }

    const regexp = RegExp(`[${currSymbol}]`, 'g');
    tempStr = tempStr.slice(0, i) + tempStr.slice(i).replace(regexp, '');
  }

  return (direction === false) ? reverseString(resultStr) : resultStr;
}
