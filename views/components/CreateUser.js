import * as React from 'react';
import UserComponent from './Blocks/UserComponent.js';


const CreateUser = () => {

	return (
		<>
		<UserComponent fetchUrl='http://localhost:3000/api/user' nameDefault="" emailDefault="" />
		</>
	);
};

export default CreateUser;
