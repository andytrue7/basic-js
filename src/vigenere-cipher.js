const CustomError = require("../extensions/custom-error");

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.reverseStr = !isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('not enough parameters');
    }

    let keyString = '';
    let result = '';
    let code = 0;

    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();

    let keyLength = key.length;
    let it = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        keyString += message[i];
        continue; 
        }
      
      if (it % keyLength === 0) {
        it = 0;
      }
      keyString += keyUp[it];
      it++;
    }

    for (let i = 0; i < message.length; i++) {
      let symbol = messageUp[i];
          
      if (!symbol.match(/[A-Z]/)) {
        result += symbol;
        continue;
      }
      
      let symbolCode = alphabet.indexOf(symbol);
      
      let keyCode = alphabet.indexOf(keyString[i]);
      
      let codeSum = symbolCode + keyCode;
      
      code =  codeSum % 26;
     
      result += alphabet[code];
    }

    if (this.reverseStr === true) {
      return result.split('').reverse().join('');
    }

    return result;
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('not enough parameters');
    }

    let keyString = '';
    let result = '';
    let code = 0;
    let messageUp = encryptedMessage.toUpperCase();
    let keyUp = key.toUpperCase();
    let keyLength = key.length;
    let it = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === ' ') {
        keyString += encryptedMessage[i];
        continue; 
        }
      
      if (it % keyLength === 0) {
        it = 0;
      }
      keyString += keyUp[it];
      it++;
    }

    for (let i = 0; i < encryptedMessage.length; i++) {
      let symbol = messageUp[i];
          
      if (!symbol.match(/[A-Z]/)) {
        result += symbol;
        continue;
      }
      
      let symbolCode = alphabet.indexOf(symbol);
      let keyCode = alphabet.indexOf(keyString[i]);
      let codeDiff = symbolCode - keyCode;
      
      if (codeDiff < 0) {
        code = symbolCode + 26 - keyCode;
      } else {
        code =  codeDiff % 26;
      }
      result += alphabet[code];
    }

    if (this.reverseStr === true) {
      return result.split('').reverse().join('');
    }
    
    return result;
  }
}

module.exports = VigenereCipheringMachine;
