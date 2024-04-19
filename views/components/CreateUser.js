import * as React from 'react';
import UserComponent from './Blocks/UserComponent.js';


const CreateUser = () => {
	return (
		<>
		<UserComponent 
			fetchUrl='http://localhost:3000/api/user'
			fullNameDefault=""
			emailDefault=""
		/>
		</>
	);
};

export default CreateUser;
