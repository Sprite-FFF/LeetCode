// 给定一个字符串，找出不含有重复字符的最长子串的长度。

// 示例：

// 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

// 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

// 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。

// 暴力穷举法
// 时间复杂度太高 letcode上最后一个测试用例无法通过 超时
// var lengthOfLongestSubstring = function(str) {
//     let count = 0
//     let subStrArr = []
//     let len = str.length
//     for(let i = 0; i < len; i++) {
//       for(let j = 1; j <= len - i ;j++) {
//         let childStr = str.substr(i, j)
//         let flag = true
//         count++
//         for(let k = 0;k < childStr.length; k++){
//           if(childStr.indexOf(childStr.charAt(k), k+1) > 0){
//             flag = false
//             break
//           }
//         }
//         if(flag) {
//           subStrArr.push(childStr)
//         }
//       }
//     }
//     let maxLen = 0
//     console.log(count)
//     subStrArr.forEach(el => {
//       if(el.length > maxLen) {
//         maxLen = el.length
//       }
//     })
//     return maxLen
// };

// let res = lengthOfLongestSubstring('xhzjkhdsj')

// 尺取法的优雅实现
let getLength = function (str) {
  let map = {}
  let left = 0
  return str.split('').reduce((max,v,i) => {
    left = map[v] >= left ? map[v] + 1 : left
    map[v] = i
    return Math.max(max, i - left + 1)
  },0)
}

let res = getLength('pwwkew')
console.log(res)