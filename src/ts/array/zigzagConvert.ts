function convert(s: string, numRows: number): string {
	if (numRows === 1 || s.length <= numRows) {
		return s;
	}

	const rows: string[] = Array(numRows).fill('');
	let currentRow = 0;
	let goingDown = false;

	for (const char of s) {
		rows[currentRow] += char;

		if (currentRow === 0 || currentRow === numRows - 1) {
			goingDown = !goingDown;
		}

		currentRow += goingDown ? 1 : -1;
	}

	return rows.join('');
}
