import * as React from 'react';
import Header from './Header.js';
import AddExperience from './AddExperience.js';
import { Button, FormGroup, Stack, Paper, Typography } from '@mui/material';
import StatefulInput from './StatefulInput.js';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');

const UserExists = React.lazy(() => import('./UserExists.js'));
const Suspense = React.Suspense;

const User = () => {
	const [isClient, setIsClient] = React.useState(false);
	const userDetails = getUser.read();
	const [initialState, setInitialState] = React.useState(
		userDetails.length > 0
	);
	const [hasFullName, setHasFullName] = React.useState();
	const [hasEmail, setHasEmail] = React.useState();
	const [hasPort, setHasPort] = React.useState();
	const [hasGithub, setHasGithub] = React.useState();
	const [hasBlog, setHasBlog] = React.useState();
	const [hasLink, setHasLink] = React.useState();

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	const handleSave = async () => {
		const postUserName = await fetch('http://localhost:3000/api/user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: hasFullName,
				email: hasEmail,
				portfolio: hasPort,
				github: hasGithub,
				blog: hasBlog,
				linked_in: hasLink,
			}),
		});
		setInitialState(true);
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
							<Stack>
								<FormGroup>
									<Typography variant='h2'>
										Your Info
									</Typography>
									{!initialState ? (
										<>
											<StatefulInput
												handelChange={(e) =>
													setHasFullName(
														e.target.value
													)
												}
												label='Full Name'
											/>
											<StatefulInput
												handelChange={(e) =>
													setHasEmail(e.target.value)
												}
												buttonText='Enter'
												label='Email'
											/>
											<StatefulInput
												handelChange={(e) =>
													setHasPort(e.target.value)
												}
												label='Portfolio'
											/>
											<StatefulInput
												handelChange={(e) =>
													setHasGithub(e.target.value)
												}
												label='Github'
											/>
											<StatefulInput
												handelChange={(e) =>
													setHasLink(e.target.value)
												}
												label='LinkedIn'
											/>
											<StatefulInput
												handelChange={(e) =>
													setHasBlog(e.target.value)
												}
												label='Blog'
											/>
											<Button onClick={handleSave}>
												Save
											</Button>
										</>
									) : (
										<Suspense fallback={'...'}>
											<UserExists />
										</Suspense>
									)}
								</FormGroup>
								<FormGroup>
									<Typography variant='h2'>
										Job Experience
									</Typography>
									<AddExperience />
								</FormGroup>
							</Stack>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default User;
