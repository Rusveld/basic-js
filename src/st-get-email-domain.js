import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let i;
  while(email.indexOf("@") != -1){
      i = email.indexOf("@");
    
     email =  email.replace(email[i], " ")
     
  }
  
  return email.slice(i + 1)
}
