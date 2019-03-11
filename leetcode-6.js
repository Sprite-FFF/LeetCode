// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs,count) {
  count = count || 1
  if(strs.length == 0){
    return ''
  }
  let temp = strs[0].substr(0,count)
  console.log(temp)
  let flag = true
  for(let i = 1; i< strs.length; i++){
    if(strs[i].substr(0,count) != temp){
      flag = false
    }
  }
  if(!flag){
    return temp.substr(0,temp.length-1)
  }
  if(count >= strs[0].length){
    return temp
  }
  count++
  return arguments.callee(strs,count)
};

let res = longestCommonPrefix(["aa","aa"])
console.log(res)