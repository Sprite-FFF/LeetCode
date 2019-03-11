// 给定一个 32 位有符号整数，将整数中的数字进行反转。
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x < 0) {
    let str = x.toString()
    str = str.substr(1)
    let len = str.length
    let temp = ''
    for(let i = 1; i <= len; i++){
        temp += str[len-i]
    }
    return -temp < -Math.pow(2,31) ? 0 : -temp
  }
  let str = x.toString()
    let len = str.length
    let temp = ''
    for(let i = 1; i <= len; i++){
        temp += str[len-i]
    }
    return +temp > Math.pow(2,31) - 1 ? 0 : +temp
};

console.log(reverse(-123)) 