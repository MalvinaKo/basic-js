const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  let string = '';
  if (!members) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string' || members[i] instanceof String) {
      members[i] = members[i].replace(/\s/g, '').toUpperCase();
      string += members[i][0];
    } else false;
  }
  return string.split('').sort().join('');
};
