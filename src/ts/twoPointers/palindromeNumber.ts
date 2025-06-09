function isPalindromeNumber(x: number): boolean {
	const s: string = x.toString();
	for (let i: number = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return false;
		}
	}
	return true;
}
