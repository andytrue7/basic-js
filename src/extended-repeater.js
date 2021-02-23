const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '';
  let additionalStr = '';

  let addition = options.addition;
  let separator = options.separator ? options.separator : '+';
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'; 

  if (typeof str === 'number' || typeof str === 'boolean') {
    str = String(str);
  } else if (typeof str === 'object' && str !== null) {
    str = str.toString();
  }

  addition = typeof addition == "undefined" ? '' : addition;  
  
  if (typeof addition === 'number' || typeof addition === 'boolean') {
    addition = String(addition);
  } else if (typeof addition === 'object' && addition !== null) {
    addition = addition.toString();
  }


  if (!options.additionRepeatTimes || options.additionRepeatTimes == 1) {
    additionalStr +=  addition + additionSeparator;
  } else {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionalStr +=  addition + additionSeparator;
    }
  }

  additionalStr = additionalStr.substring(0, additionalStr.length - additionSeparator.length);

  if (!options.repeatTimes || options.repeatTimes == 1) {
    newStr += str + additionalStr + separator;
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      newStr += str + additionalStr + separator;
    }
  }
  
  return newStr.substring(0, newStr.length - separator.length);

};

//console.log(repeater('string', { repeatTimes: 3, separator: undefined, addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: undefined }));
  