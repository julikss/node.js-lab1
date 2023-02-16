'use strict';

function createPhoneNumber(numbers){
  let phoneNumber = '(xxx) xxx-xxxx';
  let leftNumbers = Array.from(numbers);

  if (numbers.length < 9) {
    throw new Error('Error! Not enough numbers are provided!')
  }
  
  for (let i = 0; i < 10; i++) {
    let index = Math.floor(Math.random() * leftNumbers.length);
    phoneNumber = phoneNumber.replace('x', leftNumbers[index]);
    leftNumbers.splice(index, 1);
  }
  
  return phoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);