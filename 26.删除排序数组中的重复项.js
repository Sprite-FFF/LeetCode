/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (42.90%)
 * Total Accepted:    90.6K
 * Total Submissions: 211.1K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * 示例 1:
 * 
 * 给定数组 nums = [1,1,2], 
 * 
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 2:
 * 
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 
 * 你不需要考虑数组中超出新长度后面的元素。
 * 
 * 
 * 说明:
 * 
 * 为什么返回数值是整数，但输出的答案是数组呢?
 * 
 * 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。
 * 
 * 你可以想象内部操作如下:
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * 
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     var i,j
//     for ( i = 0; i < nums.length; i++) {
//         var num = nums[i]
//         for (j = i + 1; j < nums.length; j++) {
//             const el = nums[j]
//             if(el == num){
//                 nums.splice(j,1)
//                 i--
//             }
//         }
//     }
//     return nums
// };

var removeDuplicates = function(nums) {
    var i = 0
    for (var j = 0; j < nums.length; j++) {
        if(nums[i] != nums[j]) {
            nums[i + 1] = nums[j]
            i++
        }
    }
    return nums
}

const arr = [-49,-49,-49,-49,-49,-49,-48,-45,-44,-39,-38,-37,-36,-36,-35,-34,-32,-32,-31,-31,-30,-29,-29,-28,-27,-27,-26,-26,-25,-20,-20,-20,-19,-18,-17,-16,-14,-13,-12,-12,-11,-7,-5,-2,-2,-2,-1,-1,-1,0,0,0,4,4,6,7,8,9,10,10,10,11,13,14,14,14,17,17,20,21,21,21,21,22,23,23,23,24,24,24,24,26,28,28,30,34,34,34,34,36,37,38,38,40,40,40,42,45,46,47,47,48,50,50,50]

console.log(removeDuplicates(arr))

