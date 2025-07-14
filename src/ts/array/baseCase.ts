function baseCase(arr: number[]): number {
	if (arr.length === 0) {
		return 0;
	}

	const last = arr.pop()!;
	return last + baseCase(arr);
}

console.log('case 1', baseCase([1, 2, 3, 4, 5, 6, 7]));
console.log('case 2', baseCase([1]));

function baseCase2(arr: number[]): number {
	if (arr.length === 0) return 0;

	arr.pop();
	return 1 + baseCase2(arr);
}

console.log('case 1', baseCase2([1, 2, 3]));
console.log('case 2', baseCase2([1]));
console.log('case 3', baseCase2([]));
