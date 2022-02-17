const nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
    nums = [...new Set(nums)] // 
    nums.sort()
    nums.reverse()
    return nums[1]
}
let res = getSecondLargest(nums)
console.log(res)