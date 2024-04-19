import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Input } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { Controller, useForm } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';

const getLinks = fetchData('http://localhost:3000/api/links')
const getExperience = fetchData('http://localhost:3000/api/experience')

const UserComponent = (props) => {
	const { fetchUrl, linkUrl, experienceUrl, linkButtonText, experienceButtonText } = props;
	const {control, handleSubmit} = useForm()
	const allSavedLinks = getLinks.read()
	const allSavedExperience = getExperience.read()

	let linksArr = []
	let expArr = []
	React.useEffect(() => {
		if(allSavedLinks && allSavedLinks.length > 0) {
			allSavedLinks.forEach((li) => linksArr.push(li._id))
		}
		if (allSavedExperience) {
			allSavedExperience.forEach((li) => expArr.push(li._id))
		}
	}, [allSavedLinks, allSavedExperience])

	const handleSave = async (data) => {
		const postUserName = await fetch(fetchUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.fullName,
				email: data.email,
				links: linksArr,
				experience: expArr
			}),
		});
		return postUserName.json();
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => handleSave(data))}>
				<FormGroup sx={{ marginTop: '1em' }}>
					<BasicInput id="fullName" label='Full Name'>
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
							/>
					</BasicInput>
					<BasicInput id="email" label='Email'>
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
							/>
					</BasicInput>
					<ContainedButton type='submit'>Save</ContainedButton>
				</FormGroup>
			</form>
			<FormGroup>
				<Link to={linkUrl}>{linkButtonText}</Link>
				<Link to={experienceUrl}>{experienceButtonText}</Link>
			</FormGroup>
		</>
	);
};

export default UserComponent;
