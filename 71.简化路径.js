/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const stack = []
  path.split('/').forEach(el => {
    if (el == '.') {
      return
    }
    if (el == '..') {
      stack.pop()
      return
    }
    if (el) { 
      stack.push(el)
    }
  })
  return '/' + stack.join('/')
};
// @lc code=end

