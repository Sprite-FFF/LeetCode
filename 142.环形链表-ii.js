/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//   const caches = []
//   let current = head
//   while(current && current.next !== null) {
//     if (caches.includes(current)) {
//       return current
//     }
//     caches.push(current)
//     current = current.next
//   }
//   return null
// };
var detectCycle = function(head) {
  let slow = head
  let fast = head
  let start = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) {
      while(slow !== start) {
        slow = slow.next
        start = start.next
      }
      return start
    }
  }
  return null
};
// @lc code=end

