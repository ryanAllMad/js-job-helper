import wrapPromise from './wrapPromise.js';

const fetchData = (url) => {
	const promise = fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => res.data);
	return wrapPromise(promise)
};

export default fetchData