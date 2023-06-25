const { check } = require("prettier");

function sumDigits(num) {
  
  num = Math.abs(num)

  let result = 0;
  let remainig = num;

  while (remainig % 10 !== 0 || (Math.floor(remainig / 10) !== 0 ) ){
    result += remainig % 10;
    remainig = Math.floor(remainig /10);
  }

  return result;
}

module.exports = sumDigits;
