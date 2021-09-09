/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {
	let newArray = [];
	let maxValue = Math.max(...numbers)
	newArray = numbers.filter(element => {
		if (element == maxValue) {
			return false
		} else {
			return element
		}
	})
	let sum = Math.max(...newArray) + maxValue

	return sum;
}
