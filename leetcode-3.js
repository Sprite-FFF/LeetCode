// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

function isPalindromeNumber(num) {
  let str = num.toString()
  let temp = ''
  let len = str.length
  for (let i = 1 ;i <= str.length; i++) {
    temp += str[len-i]
  }
  return temp == str
}

isPalindromeNumber(122)