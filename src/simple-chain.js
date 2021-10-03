import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain:[],
  getLength() {
    this.chain.length
    return this
  },
  addLink(value) {
    this.chain.push( `( ${value} )`)
    return this
  },
  
  removeLink(position) {
    if(position > this.chain.length || position <= 0 || typeof position !== "number"){
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }

    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let lastchain = this.chain.join("~~")
    this.chain = []
    return lastchain
  }
};

