import * as React from 'react';
import { FormGroup, Input } from '@mui/material';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import EditLinks from '../EditLinks.js';
import EditExperience from '../EditExperience.js';
import CreateLinks from '../CreateLinks.js';
import CreateExperience from '../CreateExperience.js';
import { Controller, useForm } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';

const getLinks = fetchData('http://localhost:3000/api/links');
const getExperience = fetchData('http://localhost:3000/api/experience');

const UserComponent = (props) => {
	const { fetchUrl, emailDefault, fullNameDefault } = props;
	const { control, handleSubmit } = useForm();
	const allSavedLinks = getLinks.read();
	const allSavedExperience = getExperience.read();
	const linksArrIds = [];
	const expArrIds = [];
	const [linksArr, setLinksArr] = React.useState([]);
	const [expArr, setExpArr] = React.useState([]);
	const [newLinksArr, setNewLinksArr] = React.useState([]);
	const [newExpsArr, setNewExpsArr] = React.useState([]);

	React.useEffect(() => {
		if (allSavedLinks && allSavedLinks.length > 0) {
			setLinksArr(allSavedLinks);
			allSavedLinks.forEach((li) => linksArrIds.push(li._id));
		}
		if (allSavedExperience && allSavedExperience.length > 0) {
			setExpArr(allSavedExperience);
			allSavedExperience.forEach((li) => expArrIds.push(li._id));
		}
		console.log(newLinksArr)
	}, [allSavedLinks, allSavedExperience, linksArr, expArr, newLinksArr]);

	const parseDate = (date) => {
		const dateFormat = new Date(date);
		const year = dateFormat.getFullYear();
		const month = dateFormat.toLocaleString('en-US', { month: '2-digit' });
		const day = dateFormat.toLocaleString('en-US', { day: '2-digit' });
		return `${year}-${month}-${day}`;
	};
	const addMoreLinks = () => {
		setNewLinksArr((prev) => prev.concat(prev.length))
	}
	const addMoreExp = () => {
		setNewExpsArr((prev) => prev.concat(prev.length))
	}
	const deleteThisLink = async (id) => {
		const promise = await fetch(`http://localhost:3000/api/links/${id}`, {
			method: 'DELETE'
		})
		if (allSavedLinks && allSavedLinks.length > 0) {
			setLinksArr(allSavedLinks);
		}
		return promise
	}
	const deleteThisExp = async (id) => {
			const promise = await fetch(`http://localhost:3000/api/experience/${id}`, {
				method: 'DELETE'
			})
			if (allSavedExperience && allSavedExperience.length > 0) {
				setExpArr(allSavedExperience);
			}
			return promise
	}
	const deleteNewLinks = (id) => {
		if(newLinksArr.length === 1) {
			setNewLinksArr([])
		} else {
			setNewLinksArr((prev) => prev.splice(id, 1))
		}
	}
	const deleteNewExp = (id) => {
		if(newExpsArr.length === 1) {
			setNewExpsArr([])
		} else {
			setNewExpsArr((prev) => prev.splice(id, 1))
		}
	}
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
			<FormGroup>
				{linksArr.length > 0 &&
					linksArr.map((link) => (
						<EditLinks
							linkId={link._id}
							defaultTitle={link.title}
							defaultHref={link.href}
							deleteOne={() => deleteThisLink(link._id)}
						/>
					))}
				{newLinksArr.length > 0 &&
					newLinksArr.map((link) => (
						<CreateLinks key={newLinksArr.indexOf(link)} deleteOne={() => deleteNewLinks(newLinksArr.indexOf(link))} />
					))}
					<ContainedButton type='button' onClick={addMoreLinks}>Add More Links?</ContainedButton>
			</FormGroup>
			<FormGroup>
				{expArr.length > 0 &&
					expArr.map((exp) => (
						<EditExperience
							expId={exp._id}
							companyNameDefault={exp.company}
							jobTitleDefault={exp.title}
							startDateDefault={parseDate(exp.year_started)}
							endDateDefault={parseDate(exp.year_ended)}
							deleteOne={() => deleteThisExp(exp._id)}
						/>
					))}
				
				{newExpsArr.length > 0 &&
					newExpsArr.map((exp) => (
						<CreateExperience key={newExpsArr.indexOf(exp)} deleteOne={() => deleteNewExp(newExpsArr.indexOf(exp))} />
					))}
				<ContainedButton onClick={addMoreExp} type='button'>
					Add More Experience?
				</ContainedButton>
			</FormGroup>
		</>
	);
};

export default UserComponent;
