export const getLastWordLength = (str = "") => {
	let newString = str.split(/[\,!]+/);
	newString[newString.length - 1].length
	return newString
};
