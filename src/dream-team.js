import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let newArr = []
  if(Array.isArray(members) === false){
    return false;
  }
  for(let item in members){
      
      if(typeof(members[item]) === "string"){

         newArr.unshift(members[item])
      }
  }
  for(let item in newArr){
      newArr[item] = newArr[item].replace(/\ /g, "");
      newArr[item] = newArr[item].charAt(0)
  }
  for(let item in newArr){
      newArr[item] = newArr[item].toUpperCase();
  }   
  newArr.sort()
  newArr = newArr.join("")
  return newArr
}
