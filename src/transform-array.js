const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let conditions = [null, undefined, '--double-next', '--double-prev', '--discard-next', '--discard-prev'];
  let copyArr = [...arr];
  
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === '--double-next') {
      copyArr.splice(i, 1, copyArr[i + 1]);
    }

    if (arr[i] === '--double-prev') {
      copyArr.splice(i, 1, copyArr[i - 1]);
    }

    if (arr[i] === '--discard-next') {
      copyArr.splice(i + 1, 1, null);
    }

    if (arr[i] === '--discard-prev') {
      if (i > 0) {
        copyArr.splice(i - 1, 1, null);
      }
    } 
  }
  return copyArr.filter(item => !conditions.includes(item));
};
