import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';

const UserComponent = (props) => {
	const [isClient, setIsClient] = React.useState(false);
	const [hasFullName, setHasFullName] = React.useState();
	const [hasEmail, setHasEmail] = React.useState();

	const { fetchUrl, nameDefault, emailDefault } = props;

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	const handleSave = async () => {
		const postUserName = await fetch(fetchUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: hasFullName,
				email: hasEmail,
			}),
		});
		return postUserName.json();
	};

	return (
		<>
			{isClient && (
				<>
					<FormGroup sx={{ marginTop: '1em' }}>
						<BasicInput
							defaultValue={nameDefault}
							handleChange={(e) => setHasFullName(e.target.value)}
							label='Full Name'
						/>
						<BasicInput
							defaultValue={emailDefault}
							handleChange={(e) => setHasEmail(e.target.value)}
							buttonText='Enter'
							label='Email'
						/>
						<ContainedButton onClick={handleSave}>
							Save
						</ContainedButton>
					</FormGroup>
					<FormGroup>
							<Link
								to={'/links'}
							>
								Add Links?
							</Link>
							<Link
								to={'/experience'}
							>
								Add Experience?
							</Link>
					</FormGroup>
				</>
			)}
		</>
	);
};

export default UserComponent;
