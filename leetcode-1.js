// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
// 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
// 示例：
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

function sum (arr, target) {
  let res = []
  let flag = true
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(j == i) {
        continue
      }
      if(arr[i] + arr[j] == target){
        res.push(i)
        res.push(j)
        flag = false
        break
      }
    }
    if(!flag) {
      break
    }
  }
  return res
}

console.log(sum([2,7,15,11], 9))