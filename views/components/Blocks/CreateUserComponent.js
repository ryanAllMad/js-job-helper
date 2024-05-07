import * as React from 'react';
import { FormGroup, Input, Typography } from '@mui/material';
import { Controller, Form, useForm } from 'react-hook-form';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
import ExperienceForm from './ExperienceForm.js';

const CreateUserComponent = () => {
	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm();
	const [newLinksArr, setNewLinksArr] = React.useState([]);
	const [newExpsArr, setNewExpsArr] = React.useState([]);

	const addMoreLinks = () => {
		setNewLinksArr((prev) => prev.concat(prev.length));
	};
	const deleteNewLinks = (id) => {
		if (newLinksArr.length === 1) {
			setNewLinksArr([]);
		} else {
			setNewLinksArr((prev) => prev.splice(id, 1));
		}
	};
	const addMoreExp = () => {
		setNewExpsArr((prev) => prev.concat(prev.length));
	};
	const deleteNewExp = (id) => {
		if (newExpsArr.length === 1) {
			setNewExpsArr([]);
		} else {
			setNewExpsArr((prev) => prev.splice(id, 1));
		}
	};

	const getNewLinkData = (data) => {
		let linksArr = [];
		const dataKeys = Object.keys(data);
		const linkData = dataKeys.filter((d) => d.includes('link_title'));
		linkData.forEach((key, idx) => {
			let obj = {};
			const linkTitle = `link_title_${idx}`;
			const linkHref = `link_href_${idx}`;
			if (linkTitle) {
				obj['title'] = data[linkTitle];
			}
			if (linkHref) {
				obj['href'] = data[linkHref];
			}
			linksArr.push(obj);
		});
		return linksArr;
	};

	const getNewExperienceData = (data) => {
		let expArr = [];
		const dataKeys = Object.keys(data);
		const expData = dataKeys.filter((d) => d.includes('job_title_'));
		expData.forEach((key, idx) => {
			let obj = {};
			const expCompany = `company_name_${idx}`;
			const expTitle = `job_title_${idx}`;
			const expStart = `start_date_${idx}`;
			const expEnd = `end_date_${idx}`;
			if (expCompany) {
				obj['company'] = data[expCompany];
			}
			if (expTitle) {
				obj['title'] = data[expTitle];
			}
			if (expStart) {
				obj['year_started'] = data[expStart];
			}
			if (expEnd) {
				obj['year_ended'] = data[expEnd];
			}
			expArr.push(obj);
		});
		return expArr;
	};

	const handleSave = async (data) => {
		const newLinks = getNewLinkData(data);
		const newExp = getNewExperienceData(data);
		const postUserName = await fetch('http://localhost:3000/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: data.fullName,
				email: data.email,
				links: newLinks,
				experience: newExp,
			}),
		});
		return postUserName.json();
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => handleSave(data))}>
				<FormGroup className='user-form-group'>
					<BasicInput
						id='fullName'
						label='Full Name'
					>
						<Controller
							control={control}
							name='fullName'
							rules={{ required: true }}
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
							defaultValue=''
						/>
					</BasicInput>
					<BasicInput
						id='email'
						label='Email'
					>
						<Controller
							control={control}
							name='email'
							rules={{ required: true }}
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
							defaultValue=''
						/>
					</BasicInput>
					<Typography variant='h2'>Add Links</Typography>
					{newLinksArr.length > 0 &&
						newLinksArr.map((link) => (
							<UserLinkInputs
								key={newLinksArr.indexOf(link)}
								deleteOne={() =>
									deleteNewLinks(newLinksArr.indexOf(link))
								}
								titleInput={
									<Controller
										control={control}
										name={`link_title_${newLinksArr.indexOf(
											link
										)}`}
										rules={{
											required: true,
										}}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
											/>
										)}
										defaultValue=''
									/>
								}
								hrefInput={
									<Controller
										control={control}
										name={`link_href_${newLinksArr.indexOf(
											link
										)}`}
										rules={{
											required: true,
										}}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
											/>
										)}
										defaultValue=''
									/>
								}
							/>
						))}
					<ContainedButton
						type='button'
						onClick={addMoreLinks}
					>
						Add Links?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<Typography variant='h2'>Work Experience</Typography>
					{newExpsArr.length > 0 &&
						newExpsArr.map((exp) => (
							<ExperienceForm
								key={newExpsArr.indexOf(exp)}
								deleteOne={() =>
									deleteNewExp(newExpsArr.indexOf(exp))
								}
								companyNameComp={
									<Controller
										control={control}
										name={`company_name_${newExpsArr.indexOf(
											exp
										)}`}
										rules={{
											required:
												'Please enter the company name',
										}}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
												aria-labelledby='companyName'
											/>
										)}
										defaultValue=''
									/>
								}
								jobTitleComp={
									<Controller
										control={control}
										name={`job_title_${newExpsArr.indexOf(
											exp
										)}`}
										rules={{
											required:
												'Please enter the position title you held in this role',
										}}
										render={({
											field: {
												onChange,
												onBlur,
												value,
												ref,
											},
										}) => (
											<Input
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												inputRef={ref}
												type='text'
												aria-labelledby='jobTitle'
											/>
										)}
										defaultValue=''
									/>
								}
								startDateComp={
									<Controller
										control={control}
										name={`start_date_${newExpsArr.indexOf(
											exp
										)}`}
										rules={{
											required:
												'Please enter the first date you started in this position',
										}}
										render={({
											field: {
												onChange,
												onBlur,
												ref,
												value,
											},
										}) => (
											<Input
												type='date'
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												label='Start Date'
											/>
										)}
										defaultValue=''
									/>
								}
								endDateComp={
									<Controller
										control={control}
										name={`end_date_${newExpsArr.indexOf(
											exp
										)}`}
										rules={{
											required:
												'Please Enter the date of your last day in this position',
										}}
										render={({
											field: {
												onChange,
												onBlur,
												ref,
												value,
											},
										}) => (
											<Input
												type='date'
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												label='End Date'
											/>
										)}
										defaultValue=''
									/>
								}
							/>
						))}
				</FormGroup>
				<FormGroup className='user-form-group'>
					<ContainedButton
						onClick={addMoreExp}
						type='button'
						sx={{marginBottom: '2em !important'}}
					>
						Add Experience?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<ContainedButton
						disabled={!isValid}
						type='submit'
						sx={{marginBottom: '2em !important'}}
					>
						Save
					</ContainedButton>
				</FormGroup>
			</form>
		</>
	);
};

export default CreateUserComponent;
