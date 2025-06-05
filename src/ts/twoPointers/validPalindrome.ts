function isPalindrome(s: string): boolean {
	s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let i: number = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return false;
		}
	}
	return true;
}
