import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n)
  let m = n;
  let counter = -Infinity;

  for(let i = 0;i < n.length; i++){
    n = m;

    n = n.replace(n[i], "")
    n = Number(n)
 
    if(n>counter){
      counter = n;
    }
    n = m;
  }
  return counter;
}
