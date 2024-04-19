import * as React from 'react';
import BasicDialog from './Blocks/BasicDialog.js';
import UserComponent from './Blocks/UserComponent.js';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');


const EditUser = () => {
	const userDetails = getUser.read();

	return (
		<>
		<UserComponent 
			fetchUrl={`http://localhost:3000/api/user/${userDetails[0]._id}`} 
			linkUrl="/edit-links"
			experienceUrl="edit-links"
			linkButtonText="Edit links?"
			experienceButtonText="Edit experience?"
		/>
		</>
	);
};

export default EditUser;
