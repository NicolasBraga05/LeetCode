function rotate(nums: number[], k: number): void {
	const n = nums.length;
	k = k % n;

	const lastPart = nums.slice(n - k);

	const firstPart = nums.slice(0, n - k);

	nums.splice(0, n, ...lastPart, ...firstPart);
}
