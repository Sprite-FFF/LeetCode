/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.66%)
 * Total Accepted:    51.1K
 * Total Submissions: 139.3K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s) {
        return true
    }
    if(s.length < 2) {
        return false
    }
    const stack = []
    let flag = true
    s.split('').forEach(el => {
        if (el == '(' || el == '[' || el =='{') {
            stack.push(el)
        } else {
            let top = stack[stack.length - 1]
            if(top == '(' && el == ')') {
                stack.pop()
            } else if(top == '[' && el == ']') {
                stack.pop()
            } else if(top == '{' && el == '}') {
                stack.pop()
            } else {
                flag = false
            }
        }
    })
    return stack.length == 0 && flag
};

