const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],
  
  getLength() {
    return this.str;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    }  
    
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    
   let res = this.chain.join('~~');
   this.chain.splice(0, this.chain.length);
   return res;
  }
};

module.exports = chainMaker;
