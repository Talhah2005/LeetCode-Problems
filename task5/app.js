function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let k = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
let nums = [0,0,1,1,1,2,2,3,3,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29];
let k = removeDuplicates(nums);
console.log(k);       
console.log(nums.slice(0, k));

