function merge(intervals: number[][]): number[][] {
	if (intervals.length <= 1) return intervals;

	intervals.sort((a, b) => a[0] - b[0]);

	const merged: number[][] = [];
	let current = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		const next = intervals[i];

		if (next[0] <= current[1]) {
			current[1] = Math.max(current[1], next[1]);
		} else {
			merged.push(current);
			current = next;
		}
	}

	merged.push(current);
	console.log(merged);
	return merged;
}

merge([
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]);
