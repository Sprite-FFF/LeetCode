/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// var postorderTraversal = function(root, result=[]) {
//   // 递归算法
//   // 后序遍历 先便利left 再遍历right 最后遍历自己
//   if(!root) {
//     return []
//   }
//   postorderTraversal(root.left, result)
//   postorderTraversal(root.right, result)
//   result.push(root.val)
//   return result
// };
const root = { val: 1, left: null, right: null }
const a = { val: 2, left: null, right: null }
const b = { val: 3, left: null, right: null }
const c = { val: 4, left: null, right: null }
const d = { val: 5, left: null, right: null }
const e = { val: 6, left: null, right: null }
const f = { val: 7, left: null, right: null }
root.left = a
root.right = b
a.left = c
a.right = d
b.left = e
b.right = f
var postorderTraversal = function(root) {
  // 迭代算法
  // 后序遍历 先遍历left 再遍历right 最后遍历自己
  // 最难的遍历 关键在于出栈之后右子树的处理
  const stack = []
  const result = []
  let pre = null
  while(root || stack.length) {
    if(root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      if(!root.right || root.right === pre) {
        result.push(root.val)
        pre = root
        root = null
      } else {
        stack.push(root)
        stack.push(root.right)
        root = root.right.left
      }
    }
  }
  return result
};
const result = postorderTraversal(root)
console.log(result)
// @lc code=end

