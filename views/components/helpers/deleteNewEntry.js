export const deleteNewEntry = (id, arrayToSplice, stateFunc, resetField, fieldOne, fieldTwo, fieldThree, fieldFour) => {
	const updatedArr = arrayToSplice.toSpliced(arrayToSplice.indexOf(id), 1)
	stateFunc(updatedArr);
	if(fieldOne) {
		resetField(`${fieldOne}${arrayToSplice.indexOf(id)}`)
	}
	if(fieldTwo) {
		resetField(`${fieldTwo}${arrayToSplice.indexOf(id)}`)
	}
	if(fieldThree) {
		resetField(`${fieldThree}${arrayToSplice.indexOf(id)}`)
	}
	if(fieldFour) {
		resetField(`${fieldFour}${arrayToSplice.indexOf(id)}`)
	}
};