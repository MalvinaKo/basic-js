const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || date == null) throw 'Error';
  let month = date.toLocaleString('default', { month: '2-digit' });
  if (month >= 3 && month <= 5) return 'spring';
  else if (month >= 6 && month <= 8) return 'summer';
  else if (month >= 9 && month <= 11) return 'fall';
  else return 'winter';
};
