function timeLimit<T extends (...args: any[]) => Promise<any>>(
	fn: T,
	t: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
	return (...args: Parameters<T>): Promise<ReturnType<T>> => {
		return new Promise((resolve, reject) => {
			const timer = setTimeout(() => {
				reject('Time Limit Exceeded');
			}, t);

			fn(...args)
				.then((res) => {
					clearTimeout(timer);
					resolve(res);
				})
				.catch((err) => {
					clearTimeout(timer);
					reject(err);
				});
		});
	};
}
