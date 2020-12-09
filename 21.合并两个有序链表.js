/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {
//   // 遍历
//   if(!l1)  {
//     return l2
//   }
//   if(!l2) {
//     return l1
//   }
//   const head = new ListNode()
//   let curr = head
//   let l1Curr = l1
//   let l2Curr = l2
//   const stack = []
//   while((l1Curr || l2Curr)) {
//     if (!l1Curr) {
//       curr.next = l2Curr
//       l2Curr = null
//     } else if(!l2Curr) {
//       curr.next = l1Curr
//       l1Curr = null
//     } else if(l1Curr.val > l2Curr.val) {
//       stack.push(l2Curr)
//       l2Curr = l2Curr.next
//     } else {
//       stack.push(l1Curr)
//       l1Curr = l1Curr.next
//     }
//     if(stack.length) {
//       curr.next = stack.pop()
//       curr = curr.next
//     }
//   }
//   return head.next
// };
var mergeTwoLists = function(l1, l2) {
  // 递归
  if(!l1)  {
    return l2
  }
  if(!l2) {
    return l1
  }
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }
};
// @lc code=end

