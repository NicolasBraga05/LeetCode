function groupAnagrams(strs: string[]): string[][] {
	const anagrams: { [key: string]: string[] } = {};
	for (const str of strs) {
		const sortedStr = str.split('').sort().join('');

		if (!anagrams[sortedStr]) {
			anagrams[sortedStr] = [];
		}
		anagrams[sortedStr].push(str);
	}

	return Object.values(anagrams);
}
