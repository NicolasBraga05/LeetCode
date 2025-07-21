async function sleep(millis: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, millis));

	let t = Date.now();

	sleep(millis).then(() => {
		console.log(Date.now() - t);
	});
}
