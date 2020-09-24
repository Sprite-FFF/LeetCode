/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a === '0') {
    return b
  }
  if(b === '0') {
    return a
  }
  let ans = '',
      i = a.length - 1,
      j = b.length - 1,
      temp = 0
  for (; i >= 0 || j>= 0; i--, j--) {
    let sum = temp
    sum += i < 0 ? 0 : parseInt(a[i])
    sum += j < 0 ? 0 : parseInt(b[j])
    ans += sum % 2
    temp = Math.floor(sum / 2)
  }0
  ans += temp === 1 ? temp : ''
  return ans.split('').reverse().join('')
};
console.log(addBinary('11','1'))


// @lc code=end

