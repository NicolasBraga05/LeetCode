function majorityElement(nums: number[]): number {
	let n = nums.length;

	for (let i: number = 0; i < nums.length; i++) {
		let contador: number = 0;
		for (let j: number = 0; j < nums.length; j++) {
			if (nums[i] === nums[j]) {
				contador++;
			}
		}
		if (contador > Math.floor(n / 2)) {
			return nums[i];
		}
	}
	return -1;
}
