import * as React from 'react';
import Header from './Header.js';
import AddExperience from './AddExperience.js';
import { FormGroup, Stack, Paper, Typography } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
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
	const [linkObject, setLinkObject] = React.useState([]);
	const [title, setTitle] = React.useState();
	const [link, setLink] = React.useState();
	const [linkInputs, setLinkInputs] = React.useState([1]);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	const handleAddLink = () => {
		setLinkInputs((prev) => prev.concat(prev.length))
		console.log(linkInputs)
	};
	const handelTitleChange = (e) => {
		setTitle(e.target.value);
	};
	const handleHrefChange = (e) => {
		setLink(e.target.value);
	};
	const handleLinkSave = () => {
		const newLinkObject = linkObject.concat({
			title: title,
			href: link,
		});
		setLinkObject(newLinkObject)
	};

	const handleSave = async () => {
		const postUserName = await fetch('http://localhost:3000/api/user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: hasFullName,
				email: hasEmail,
				links: linkObject,
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
							<Stack spacing={2}>
								<FormGroup sx={{ marginTop: '1em'}}>
									<Typography variant='h2'>
										Your Info
									</Typography>
									{!initialState ? (
										<>
											<BasicInput
												handelChange={(e) =>
													setHasFullName(
														e.target.value
													)
												}
												label='Full Name'
											/>
											<BasicInput
												handelChange={(e) =>
													setHasEmail(e.target.value)
												}
												buttonText='Enter'
												label='Email'
											/>
											{linkInputs.map((link) => (
												<UserLinkInputs
													key={linkInputs.indexOf(
														link
													)}
													handelTitleChange={
														handelTitleChange
													}
													handleHrefChange={
														handleHrefChange
													}
													handleLinkSave={
														handleLinkSave
													}
												/>
											))}
											<ContainedButton
												sx={{alignSelf: 'flex-end'}}
												onClick={handleAddLink}
											>
												Add Another Link?
											</ContainedButton>
											<ContainedButton
												onClick={handleSave}
											>
												Save
											</ContainedButton>
										</>
									) : (
										<Suspense fallback={'...'}>
											<UserExists />
											<ContainedButton>
												Edit
											</ContainedButton>
										</Suspense>
									)}
								</FormGroup>
								<FormGroup sx={{ marginTop: '1em'}}>
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
