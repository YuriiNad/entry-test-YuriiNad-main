/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

	let newObj = {};

	if (fields == undefined) {
		return newObj
	} else {
		for (let element in obj) {
			for (let argument of fields) {
				if (argument == element) {
					newObj[element] = obj[element]
				}
			}
		}
		return newObj
	}
};
