function containsNearbyDuplicate(nums: number[], k: number): boolean {
	for (let i: number = 0; i < nums.length; i++) {
		for (let j: number = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
				return true;
			}
		}
	}
	return false;
}
