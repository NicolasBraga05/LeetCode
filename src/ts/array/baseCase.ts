function baseCase(arr: number[]): number {
	if (arr.length === 0) {
		return 0;
	}

	const last = arr.pop()!;
	return last + baseCase(arr);
}

console.log('case 1', baseCase([1, 2, 3, 4, 5, 6, 7]));
console.log('case 2', baseCase([1]));
