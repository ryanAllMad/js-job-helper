export const deleteNewEntry = (id, arrayToSplice, stateFunc) => {
	if (arrayToSplice.length === 1) {
		stateFunc([]);
	} else {
		stateFunc((prev) => prev.splice(id, 1));
	}
};