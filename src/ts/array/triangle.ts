function minimumTotal(triangle: number[][]): number {
	const n = triangle.length;
	const dp = [...triangle[n - 1]];

	for (let row = n - 2; row >= 0; row--) {
		for (let col = 0; col < triangle[row].length; col++) {
			dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
		}
	}

	return dp[0];
}
