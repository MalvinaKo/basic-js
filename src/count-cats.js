const CustomError = require('../extensions/custom-error');

module.exports = function countCats(array) {
  //throw new CustomError('Not implemented');
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes('^^')) {
      count += 1;
    }
  }
  return count;
};
