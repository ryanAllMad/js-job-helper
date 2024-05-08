import * as React from 'react';
import { FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
import ExperienceForm from './ExperienceForm.js';
import fetchData from '../getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');

const EditUserComponent = () => {
	const userDetails = getUser.read();
	const allSavedLinks =
		userDetails && userDetails.length > 0 ? userDetails[0].links : null;
	const allSavedExp =
		userDetails && userDetails.length > 0
			? userDetails[0].experience
			: null;
	const {
		handleSubmit,
		control,
		formState: { isValid },
	} = useForm();
	const [linksArr, setLinksArr] = React.useState(allSavedLinks);
	const [newLinksArr, setNewLinksArr] = React.useState([]);
	const [expArr, setExpArr] = React.useState(allSavedExp);
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

	const deleteThisLink = async (id) => {
		const promise = await fetch(
			`http://localhost:3000/api/user/links/${id}/${userDetails[0]._id}`,
			{
				method: 'DELETE',
			}
		);
		const newLinksArr = userDetails[0].links.filter(
			(link) => link._id !== id
		);
		setLinksArr(newLinksArr);
		return promise;
	};

	const deleteThisExp = async (id) => {
		const promise = await fetch(
			`http://localhost:3000/api/user/experience/${id}/${userDetails[0]._id}`,
			{
				method: 'DELETE',
			}
		);
		const newExpArr = userDetails[0].experience.filter(
			(exp) => exp._id !== id
		);
		setExpArr(newExpArr);
		return promise;
	};

	const parseDate = (date) => {
		const dateFormat = new Date(date);
		const year = dateFormat.getFullYear();
		const month = dateFormat.toLocaleString('en-US', { month: '2-digit' });
		const day = dateFormat.toLocaleString('en-US', { day: '2-digit' });
		return `${year}-${month}-${day}`;
	};

	const getEditedLinkData = (data) => {
		let linksArr = [];
		if (!allSavedLinks || allSavedLinks.length === 0) {
			return;
		}
		const dataExist = allSavedLinks.filter((l) => l._id);
		const linkIds = dataExist.map((d) => d._id);
		linkIds.forEach((link) => {
			let obj = {};
			const linkTitle = `link_title_${link}`;
			const linkHref = `link_href_${link}`;
			if (linkTitle) {
				obj['title'] = data[linkTitle];
			}
			if (linkHref) {
				obj['href'] = data[linkHref];
			}
			obj['_id'] = link;
			linksArr.push(obj);
		});
		return linksArr;
	};
	const getNewLinkData = (data) => {
		let linksArr = [];
		const dataKeys = Object.keys(data);
		const linkData = dataKeys.filter((d) => d.includes('link_title'));
		linkData.forEach((key, idx) => {
			let obj = {};
			const linkTitle = `link_title_${idx}`;
			const linkHref = `link_href_${idx}`;
			if (!linkTitle) {
				return;
			}
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

	const getEditedExperienceData = (data) => {
		let expArr = [];
		if (!allSavedExp || allSavedExp.length === 0) {
			return;
		}
		const dataExist = allSavedExp.filter((l) => l._id);
		const expIds = dataExist.map((d) => d._id);
		expIds.forEach((exp) => {
			let obj = {};
			const expCompany = `company_name_${exp}`;
			const expTitle = `job_title_${exp}`;
			const expStart = `start_date_${exp}`;
			const expEnd = `end_date_${exp}`;
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
			obj['_id'] = exp;
			expArr.push(obj);
		});
		return expArr;
	};
	const getNewExperienceData = (data) => {
		let expArr = [];
		const dataKeys = Object.keys(data);
		const expData = dataKeys.filter((d) => d.includes('job_title_'));
		expData.forEach((key, idx) => {
			let obj = {};
			const expCompany = `company_name_${idx}`;
			if (!expCompany) {
				return;
			}
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
		let validNewLinks = [];
		let validNewExp = [];
		let editedLinks = getEditedLinkData(data);
		const newLinks = getNewLinkData(data);
		let editedExp = getEditedExperienceData(data);
		const newExp = getNewExperienceData(data);
		if (newLinks && newLinks.length > 0) {
			validNewLinks = newLinks.filter((li) => li.title !== undefined);
			if (editedLinks && editedLinks.length > 0) {
				validNewLinks.forEach((link) => editedLinks.push(link));
			} else {
				editedLinks = validNewLinks;
			}
		}
		if (newExp && newExp.length > 0) {
			validNewExp = newExp.filter((ex) => ex.title !== undefined);
			if (editedExp && editedExp.length > 0) {
				validNewExp.forEach((exp) => editedExp.push(exp));
			} else {
				editedExp = validNewExp;
			}
		}
		const postUserName = await fetch(
			`http://localhost:3000/api/user/${userDetails[0]._id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: data.fullName,
					email: data.email,
					$set: { links: editedLinks, experience: editedExp },
				}),
			}
		);
		return postUserName.json();
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => handleSave(data))}>
				<FormGroup className='user-form-group'>
					<BasicInput
						id='full-name'
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
									id='full-name'
								/>
							)}
							defaultValue={userDetails[0].name}
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
									id='email'
								/>
							)}
							defaultValue={userDetails[0].email}
						/>
					</BasicInput>
					<Typography variant='body2'>Add Links</Typography>
					{linksArr.length > 0 &&
						linksArr.map((link) => (
							<UserLinkInputs
								key={link._id}
								defaultHref={link.href}
								deleteOne={() => deleteThisLink(link._id)}
								titleInput={
									<>
									<InputLabel htmlFor={`title-${link._id}`}>Title</InputLabel>
									<Controller
										control={control}
										name={`link_title_${link._id}`}
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
												id={`title-${link._id}`}
											/>
										)}
										defaultValue={link.title}
									/>
									</>
								}
								hrefInput={
									<>
									<InputLabel htmlFor={`href-${link._id}`}>Href</InputLabel>
									<Controller
										control={control}
										name={`link_href_${link._id}`}
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
												id={`href-${link._id}`}
											/>
										)}
										defaultValue={link.href}
									/>
									</>
									}
							/>
						))}
					{newLinksArr.length > 0 &&
						newLinksArr.map((link) => (
							<UserLinkInputs
								key={newLinksArr.indexOf(link)}
								deleteOne={() =>
									deleteNewLinks(newLinksArr.indexOf(link))
								}
								titleInput={
									<>
									<InputLabel htmlFor={`title-${newLinksArr.indexOf(link)}`}>Title</InputLabel>
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
												id={`title-${newLinksArr.indexOf(link)}`}
											/>
										)}
										defaultValue=''
									/>
									</>
								}
								hrefInput={
									<>
									<InputLabel htmlFor={`href-${newLinksArr.indexOf(link)}`}>Href</InputLabel>
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
												id={`href-${newLinksArr.indexOf(link)}`}
											/>
										)}
										defaultValue=''
									/>
									</>
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
					{expArr.length > 0 &&
						expArr.map((exp) => (
							<ExperienceForm
								key={exp._id}
								idComp={`company-name-${exp._id}`}
								idTitle={`job-title-${exp._id}`}
								idStart={`start-${exp._id}`}
								idEnd={`end-${exp._id}`}
								deleteOne={() => deleteThisExp(exp._id)}
								companyNameComp={
									<Controller
										control={control}
										name={`company_name_${exp._id}`}
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
												id={`company-name-${exp._id}`}
											/>
										)}
										defaultValue={exp.company}
									/>
								}
								jobTitleComp={
									<Controller
										control={control}
										name={`job_title_${exp._id}`}
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
												id={`job-title-${exp._id}`}
											/>
										)}
										defaultValue={exp.title}
									/>
								}
								startDateComp={
									<Controller
										control={control}
										name={`start_date_${exp._id}`}
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
												sx={{ maxWidth: '200px'}}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-${exp._id}`}
											/>
										)}
										defaultValue={parseDate(
											exp.year_started
										)}
									/>
								}
								endDateComp={
									<Controller
										control={control}
										name={`end_date_${exp._id}`}
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
												sx={{ maxWidth: '200px'}}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-${exp._id}`}
											/>
										)}
										defaultValue={parseDate(exp.year_ended)}
									/>
								}
							/>
						))}
					{newExpsArr.length > 0 &&
						newExpsArr.map((exp) => (
							<ExperienceForm
								key={newExpsArr.indexOf(exp)}
								idComp={`company-name-${newExpsArr.indexOf(exp)}`}
								idTitle={`job-title-${newExpsArr.indexOf(exp)}`}
								idStart={`start-${newExpsArr.indexOf(exp)}`}
								idEnd={`end-${newExpsArr.indexOf(exp)}`}
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
												id={`company-name-${newExpsArr.indexOf(exp)}`}
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
												id={`job-title-${newExpsArr.indexOf(exp)}`}
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
												sx={{ maxWidth: '200px'}}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-${newExpsArr.indexOf(exp)}`}
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
												sx={{ maxWidth: '200px'}}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-${newExpsArr.indexOf(exp)}`}
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

export default EditUserComponent;
