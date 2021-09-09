import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns;
  let seconds;
  let count = 2;
  for(let i = 1; i < disksNumber; i++){
    count *= 2
  }
  turns = count - 1;
  seconds = Math.floor((turns/turnsSpeed ) * 3600)
  var obj = {
    "turns": turns,
    "seconds": seconds
  }
  return obj
}
