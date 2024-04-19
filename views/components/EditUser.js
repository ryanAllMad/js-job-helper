import * as React from 'react';
import UserComponent from './Blocks/UserComponent.js';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');


const EditUser = () => {
	const userDetails = getUser.read();

	return (
		<>
		<UserComponent 
			fetchUrl={`http://localhost:3000/api/user/${userDetails[0]._id}`}
			fullNameDefault={userDetails[0].name}
			emailDefault={userDetails[0].email}
		/>
		</>
	);
};

export default EditUser;
