export const sameParityFilter = (arr = []) => {
	let newArrayOdd = [];
	let newArrayEven = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			newArrayEven.push(arr[i])

		} else {
			newArrayOdd.push(arr[i])
		}
	}
	if (arr[0] % 2 == 0) {
		return newArrayEven
	} else {
		return newArrayOdd
	}

}
