/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  if(!head) {
    return head
  }
  let pre = head
  let pointer = head.next
  while(pointer) {
    if(pre.val === pointer.val) {
      pre.next = pointer.next
      pointer = pre.next
    } else {
      pre = pointer
      pointer = pointer.next
    }
  }
  return head
};
// @lc code=end

