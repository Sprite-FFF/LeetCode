/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   const cache = []
//   while(head && head.next !== null) {
//     if (cache.includes(head)) {
//       return true
//     }
//     cache.push(head)
//     head = head.next
//   }
//   return false
// };
// const a = { val: 3, next: null }
// const b = { val: 2, next: null }
// const c = { val: 0, next: null }
// const d = { val: -4, next: null }
// a.next = b
// b.next = c
// c.next = d
// d.next = b
var hasCycle = function(head) {
  // 快慢指针法
  let fast = head
  let slow = head
  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast === slow) {
      return true
    }
  }
  return false
};
// const res = hasCycle(a)
// console.log(res)
// @lc code=end

