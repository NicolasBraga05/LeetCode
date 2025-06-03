function removeDuplicates(nums: number[]): number {
	let j: number = 0;

	for (let i: number = 0; i < nums.length; i++) {
		if (j < 1 || nums[i] !== nums[j - 1]) {
			nums[j] = nums[i];
			j++;
		}
	}
	return j;
}
