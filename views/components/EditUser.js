import * as React from 'react';
import Header from './Header.js';
import { FormGroup, Stack, Paper, Typography } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
import fetchData from './getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');


const EditUser = () => {
	const userDetails = getUser.read();
	const userExists = userDetails.length > 0;

	const [isClient, setIsClient] = React.useState(false);
	const [hasFullName, setHasFullName] = React.useState();
	const [hasEmail, setHasEmail] = React.useState();
	const [linkObject, setLinkObject] = React.useState([]);
	const [title, setTitle] = React.useState();
	const [link, setLink] = React.useState();
	const [linkInputs, setLinkInputs] = React.useState(
		userDetails[0].links.length
	);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

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
		setLinkObject(newLinkObject);
	};
	const handleAddLink = () => {
		setLinkInputs((prev) => prev.concat(prev.length));
	};
	const handleSave = async () => {
		const postUserName = await fetch(
			`http://localhost:3000/api/user/${userDetails[0]._id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: hasFullName,
					email: hasEmail,
					links: linkObject,
				}),
			}
		);
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
										defaultValue={userDetails[0].name}
										handelChange={(e) =>
											setHasFullName(e.target.value)
										}
										label='Full Name'
									/>
									<BasicInput
										defaultValue={userDetails[0].email}
										handelChange={(e) =>
											setHasEmail(e.target.value)
										}
										buttonText='Enter'
										label='Email'
									/>
									{userDetails.length > 0 &&
										userDetails[0].links.length > 0 &&
										userDetails[0].links.map((link) => (
											<UserLinkInputs
												key={userDetails[0].links.indexOf(link)}
												defaultTitleValue={link.title}
												defaultHrefValue={link.href}
												handelTitleChange={
													handelTitleChange
												}
												handleHrefChange={
													handleHrefChange
												}
												handleLinkSave={handleLinkSave}
											/>
										))}
									<ContainedButton
										sx={{ alignSelf: 'flex-end' }}
										onClick={handleAddLink}
									>
										Add Another Link?
									</ContainedButton>
									<ContainedButton onClick={handleSave}>
										Save
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

export default EditUser;
