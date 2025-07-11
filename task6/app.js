function applyOperations(nums) {
    let n = nums.length;

    
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let nonZero = nums.filter(num => num !== 0);
    let zeroCount = n - nonZero.length;

   
    let result = nonZero.concat(Array(zeroCount).fill(0));
    return result;
}
let nums = [2, 2, 4, 4, 8, 0, 0, 16];
let result = applyOperations(nums);
console.log(result);
