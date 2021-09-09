/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

	let newObj = {};

	if (fields == undefined) {
		return newObj
	} else {
		for (let element in obj) {
			for (let argument of fields) {
				if (element.includes(argument) == false) {
					newObj[element] = obj[element]
				} else {
					newObj = {}
				}
			}
		}
		return newObj
	}
};
