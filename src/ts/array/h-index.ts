function hIndex(citations: number[]): number {
	citations.sort((a, b) => b - a);

	let h: number = 0;

	for (let i: number = 0; citations.length; i++) {
		if (citations[i] >= i + 1) {
			h = i + 1;
		} else {
			break;
		}
	}
	return h;
}
