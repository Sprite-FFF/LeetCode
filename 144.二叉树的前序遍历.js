/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root, result = []) {
//   // 递归 
//   // 前序遍历 先遍历自己 再遍历左右
//   if(root) {
//     result.push(root.val)
//     preorderTraversal(root.left, result)
//     preorderTraversal(root.right, result)
//   }
//   return result
// };
var preorderTraversal = function(root) {
  // 循环遍历
  // 前序遍历 先遍历自己 再遍历左右
  const result = []
  const stack = []
  let current = root
  while(current || stack.length != 0) {
    while(current) {
      result.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }
  return result
};
// @lc code=end

