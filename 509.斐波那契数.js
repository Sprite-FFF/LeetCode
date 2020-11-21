/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// var fib = function(N) {
//   if(N === 0 || N === 1) {
//     return N
//   }
//   return fib(N - 1) + fib(N - 2)
// };
var fib = function(N) {
  const caches = [] 
  for (let i = 0; i <= N; i++) {
    if (i === 0 || i === 1) {
      caches[i] = i
      continue
    }
    caches[i] = caches[i - 1] + caches[i - 2]
  }
  return caches[N]
};
// @lc code=end

