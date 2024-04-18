import * as React from 'react';
import fetchData from './getters/fetchData.js';
import UserExists from './UserExists.js';
import CreateUser from './CreateUser.js';

const getUser = fetchData('http://localhost:3000/api/user');

const UserLanding = () => {
	const [isClient, setIsClient] = React.useState(false);
	const userDetails = getUser.read();

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<>
					{userDetails && userDetails.length > 0 ? (
						<UserExists />
					) : (
						<CreateUser />
					)}
				</>
			)}
		</>
	);
};

export default UserLanding;
