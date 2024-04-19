import * as React from 'react';
import UserComponent from './Blocks/UserComponent.js';


const CreateUser = () => {
	return (
		<>
		<UserComponent 
			fetchUrl='http://localhost:3000/api/user' 
			linkUrl="/link" 
			experienceUrl="/experience"
			linkButtonText="Add Link?"
			experienceButtonText="Add Experience?"
		/>
		</>
	);
};

export default CreateUser;
