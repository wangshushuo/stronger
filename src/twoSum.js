function twoSum1(nums, target) {
  // find返回空则继续下一次循环
  for (let i = 0; i < nums.length - 1; i++) {
    const index = find(nums, target, i, i + 1)
    if (index) return index;
  }
  return;
};
/**
 * 以low为基础遍历nums，找到sum===target则返回index，sum>target则返回空。
 * @param {number} nums 
 * @param {*} low 
 * @param {*} high 
 */
function find(nums, target, low, high) {
  for (let i = high; i < nums.length; i++) {
    const sum = nums[low] + nums[i];
    if (sum === target) return [low, i];
  }
}

function hash(element, index) {
  return element * 37 * (index + 37)
}

function twoSum(array, target) {
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[target - array[i]] !== undefined) {
      return result = [map[target - array[i]], i]
    } else {
      map[array[i]] = i;
    }
  }
}

var twoSum = function(nums, target) {
  var map=new Map();
  for(let i=0;i<nums.length;i++){
      if(!map.has(target-nums[i])){
          map.set(nums[i],i);
      }else{
          return [map.get(target-nums[i]),i]
      }
  }
};

function twoSum2(nums, target) {
  const map = arrayToMap(nums);
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const result = map.get(target - num)
    if (result !== undefined) {
      return [index, result]
    }
  }
}

module.exports = twoSum