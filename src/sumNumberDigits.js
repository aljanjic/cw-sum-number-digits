
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



// export function sumDigits(num: number): number {
  
//   let remaining:number = Math.abs(num);
//   let result:number = 0;
//   while (remaining > 0 ){
//     if(remaining % 10 !== 0) result += remaining % 10
//     remaining = Math.floor(remaining / 10)
//   }
  
//   return result;
// }
