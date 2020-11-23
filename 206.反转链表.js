/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  let current = head
  let prev = null
  while (current !== null) {
    let temp = prev
    prev = current
    current = current.next
    prev.next = temp
    // current.next = prev
  }
  return prev
};
// @lc code=end