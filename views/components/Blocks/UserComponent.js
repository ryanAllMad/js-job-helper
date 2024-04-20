import * as React from 'react';
import { FormGroup, Input } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import LinksComponent from './LinksComponent.js';
import ExperienceComponent from './ExperienceComponent.js';
import { Controller, useForm } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';


const getExperience = fetchData('http://localhost:3000/api/experience');
const getLinks = fetchData('http://localhost:3000/api/links');


const UserComponent = (props) => {
	const { fetchUrl, emailDefault, fullNameDefault } = props;
	const { control, handleSubmit } = useForm();
	const allSavedExperience = getExperience.read();
	const allSavedLinks = getLinks.read();
	const expArrIds = [];
	const linksArrIds = [];

	React.useEffect(() => {
		if (allSavedExperience && allSavedExperience.length > 0) {
			allSavedExperience.forEach((li) => expArrIds.push(li._id));
		}
		if (allSavedLinks && allSavedLinks.length > 0) {
			allSavedLinks.forEach((li) => linksArrIds.push(li._id));
		}
	}, [allSavedExperience, allSavedLinks, expArrIds, linksArrIds]);

	const handleSave = async (data) => {
		const postUserName = await fetch(fetchUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.fullName,
				email: data.email,
				links: linksArrIds,
				experience: expArrIds,
			}),
		});
		return postUserName.json();
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => handleSave(data))}>
				<FormGroup sx={{ marginTop: '1em' }}>
					<BasicInput
						id='fullName'
						label='Full Name'
					>
						<Controller
							control={control}
							name='fullName'
							render={({
								field: { onChange, onBlur, value, ref },
							}) => (
								<Input
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									inputRef={ref}
									type='text'
									aria-labelledby='email'
								/>
							)}
							defaultValue={fullNameDefault}
						/>
					</BasicInput>
					<BasicInput
						id='email'
						label='Email'
					>
						<Controller
							control={control}
							name='email'
							render={({
								field: { onChange, onBlur, value, ref },
							}) => (
								<Input
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									inputRef={ref}
									type='text'
									aria-labelledby='email'
								/>
							)}
							defaultValue={emailDefault}
						/>
					</BasicInput>
					<ContainedButton type='submit'>Save</ContainedButton>
				</FormGroup>
			</form>
			<LinksComponent />
			<ExperienceComponent />
		</>
	);
};

export default UserComponent;
