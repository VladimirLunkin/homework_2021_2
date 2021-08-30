'use strict';

const reverseString = (str) => {
  return str.split('').reverse().join('');
}

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

  if (direction === false) {
    resultStr = reverseString(resultStr);
  }

  return resultStr;
}
