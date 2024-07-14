export const deleteEntry = async (id, fetchURL, arrayToFilter, arrayToSplice, stateFunc) => {
	const promise = await fetch(
		fetchURL,
		{
			method: 'DELETE',
		}
	);
	const elToDelete = arrayToFilter.filter((el) => el._id === id)
	const updatedArr = arrayToSplice.toSpliced(arrayToSplice.indexOf(elToDelete[0]), 1)
	stateFunc(updatedArr);
	return promise;
};