/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const temp = []
  const result = []
  for (let index = 0; index < nums.length; index++) {    
    if (index != 0 && temp.includes(nums[index])) {
      result.push(temp.lastIndexOf(nums[index]), index)
      break
    }
    temp.push(target - nums[index])
  }
  return result
};
// @lc code=end
