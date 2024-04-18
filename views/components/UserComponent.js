import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import { FormGroup, Stack, Paper, Typography } from '@mui/material';
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
					<Header />
					<main>
						<Paper
							sx={{
								padding: '2em',
								position: 'relative',
								maxWidth: '1200px',
								margin: '0 auto',
							}}
							elevation={2}
						>
							<Stack spacing={2}>
								<FormGroup sx={{ marginTop: '1em' }}>
									<Typography variant='h2'>
										Your Info
									</Typography>
									<BasicInput
										defaultValue={nameDefault}
										handelChange={(e) =>
											setHasFullName(e.target.value)
										}
										label='Full Name'
									/>
									<BasicInput
										defaultValue={emailDefault}
										handelChange={(e) =>
											setHasEmail(e.target.value)
										}
										buttonText='Enter'
										label='Email'
									/>
									<ContainedButton onClick={handleSave}>
										Save
									</ContainedButton>
								</FormGroup>
								<FormGroup>
									<ContainedButton
										sx={{ alignSelf: 'flex-end' }}
									>
										<Link
											style={{ color: '#fff' }}
											to={'/links'}
										>
											Add Links?
										</Link>
									</ContainedButton>
									<ContainedButton
										sx={{ alignSelf: 'flex-end' }}
									>
										<Link
											style={{ color: '#fff' }}
											to={'/experience'}
										>
											Add Experience?
										</Link>
									</ContainedButton>
								</FormGroup>
							</Stack>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default UserComponent;
