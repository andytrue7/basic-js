const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = [];
  let teamNameStr = '';
  
  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== 'string') {
      continue;
    }
    newArr.push(members[i].trim()[0].toUpperCase());    
  }
  newArr.sort();
  teamNameStr = newArr.join('');
  return teamNameStr;
};

