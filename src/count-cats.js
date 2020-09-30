const CustomError = require('../extensions/custom-error');

module.exports = function countCats(array) {
  //throw new CustomError('Not implemented');
  if (!array.length || !array) return 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == '^^') {
        count += 1;
      }
    }
  }
  return count;
};
