class ArrayWrapper {
	private arr: number[];

	constructor(arr: number[]) {
		this.arr = arr;
	}

	valueOf(): number {
		return this.arr.reduce((sum, num) => sum + num, 0);
	}

	toString(): string {
		return `[${this.arr.join(',')}]`;
	}
}
