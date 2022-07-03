import { animals } from '../resources/animals';

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()";

function generatePassword(options) {
  let choices = "";

  if (options.uppercase) {
    choices += uppercase;
  }
  if (options.lowercase) {
    choices += lowercase;
  }
  if (options.numbers) {
    choices += numbers;
  }
  if (options.symbols) {
    choices += symbols;
  }
  let password = "";
  for (let i = 0; i < options.length; i++) {
    password += choices[Math.floor(Math.random() * choices.length)];
  }

  console.log(options.length);
  return password;
}

function generateCutePassword() {
  const animalNames =  animals
  const symbolMapping = {
    "a": "@",
    "i": "!",
    "A": "4",
    "E": "3",
    "s": "$",
  }
  
  let randomName = animalNames[Math.floor(Math.random() * animalNames.length)].toString();

  //modify name
  let cutePassword = '';
  for(let c of randomName) {
    if (c in symbolMapping) {
      cutePassword += symbolMapping[c];
    }
    else if (c === ' ' || c === '\t' || c === '\n') {
      cutePassword += symbols[Math.floor(Math.random() * symbols.length)]
    }
    else if (c === c.toLowerCase() && Math.random() > 0.5) {
      cutePassword += c.toUpperCase()
    }
    else {
      cutePassword += c
    }
  }

  let randomNumber = Math.floor(Math.random() * 10000).toString();

  return cutePassword + randomNumber;

}

export { generatePassword, generateCutePassword };
