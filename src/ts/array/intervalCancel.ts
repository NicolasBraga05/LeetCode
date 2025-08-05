type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable<T extends any[]>(fn: (...args: T) => any, args: T, t: number): () => void {
	fn(...args);

	const intervalId = setInterval(() => {
		fn(...args);
	}, t);

	const cancelFn = () => {
		clearInterval(intervalId);
	};

	return cancelFn;
}
