export function selection(arr: number[]): number[] {
	for (let i = 0; i < arr.length; i++) {
		let prev = i

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[prev]) {
				prev = j
			}
		}

		if (prev !== i) [arr[i], arr[prev]] = [arr[prev], arr[i]]
	}
	return arr
}
