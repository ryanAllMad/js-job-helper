import * as React from 'react';
import { FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
import ExperienceForm from './ExperienceForm.js';
import fetchData from '../getters/fetchData.js';
import { deleteEntry } from '../helpers/deleteEntry.js';
import { deleteNewEntry } from '../helpers/deleteNewEntry.js';

const getUser = fetchData('http://localhost:3000/api/user');

const EditUserComponent = () => {
	const userDetails = getUser.read();
	const allSavedLinks =
		userDetails && userDetails.length > 0 ? userDetails[0].links : null;
	const allSavedExp =
		userDetails && userDetails.length > 0
			? userDetails[0].experience
			: null;
	const allSavedEd =
		userDetails && userDetails.length > 0 ? userDetails[0].education : null;
	const {
		handleSubmit,
		control,
		resetField,
		formState: { isValid, errors },
	} = useForm();
	const [linksArr, setLinksArr] = React.useState(allSavedLinks);
	const [newLinksArr, setNewLinksArr] = React.useState([]);
	const [expArr, setExpArr] = React.useState(allSavedExp);
	const [newExpsArr, setNewExpsArr] = React.useState([]);
	const [edArr, setEdArr] = React.useState(allSavedEd);
	const [newEdArr, setNewEdArr] = React.useState([]);

	const addMoreLinks = () => {
		setNewLinksArr((prev) => prev.concat(prev.length));
	};
	const addMoreExp = () => {
		setNewExpsArr((prev) => prev.concat(prev.length));
	};
	const addMoreEd = () => {
		setNewEdArr((prev) => prev.concat(prev.length));
	};

	const deleteNewLinks = (id) => deleteNewEntry(id, newLinksArr, setNewLinksArr, resetField, 'link_title_', 'link_href_')
	const deleteNewExp = (id) => deleteNewEntry(id, newExpsArr, setNewExpsArr, resetField, 'company_name_', 'job_title_', 'start_date_', 'end_date_' )
	const deleteNewEd = (id) => deleteNewEntry(id, newEdArr, setNewEdArr, resetField, 'school_ed_', 'degree_ed_', 'start_ed_date_', 'end_ed_date_' )

	const deleteThisLink = (id) =>
		deleteEntry(
			id,
			`http://localhost:3000/api/user/links/${id}/${userDetails[0]._id}`,
			userDetails[0].links,
			linksArr,
			setLinksArr
		);
	const deleteThisExp = (id) => 
		deleteEntry(
			id,
			`http://localhost:3000/api/user/experience/${id}/${userDetails[0]._id}`,
			userDetails[0].experience,
			expArr,
			setExpArr
		);
	const deleteThisEd = (id) => 
		deleteEntry(
			id,
			`http://localhost:3000/api/user/education/${id}/${userDetails[0]._id}`,
			userDetails[0].education,
			edArr,
			setEdArr
		);

	const parseDate = (date) => {
		const dateFormat = new Date(date);
		const year = dateFormat.getFullYear();
		const month = dateFormat.toLocaleString('en-US', { month: '2-digit' });
		const day = dateFormat.toLocaleString('en-US', { day: '2-digit' });
		return `${year}-${month}-${day}`;
	};

	const getEditedLinkData = (data) => {
		let thisLinksArr = [];
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
			thisLinksArr.push(obj);
		});
		return thisLinksArr;
	};
	const getNewLinkData = (data) => {
		let thisLinksArr = [];
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
			thisLinksArr.push(obj);
		});
		return thisLinksArr;
	};

	const getEditedExperienceData = (data) => {
		let thisExpArr = [];
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
			thisExpArr.push(obj);
		});
		return thisExpArr;
	};
	const getNewExperienceData = (data) => {
		let thisExpArr = [];
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
			thisExpArr.push(obj);
		});
		return thisExpArr;
	};
	const getEditedEducationData = (data) => {
		let thisEdArr = [];
		if (!allSavedEd || allSavedEd.length === 0) {
			return;
		}
		const dataExist = allSavedEd.filter((l) => l._id);
		const edIds = dataExist.map((d) => d._id);
		edIds.forEach((ed) => {
			let obj = {};
			const edSchool = `school_ed_${ed}`;
			const edDegree = `degree_ed_${ed}`;
			const edStart = `start_ed_date_${ed}`;
			const edEnd = `end_ed_date_${ed}`;
			if (edSchool) {
				obj['school'] = data[edSchool];
			}
			if (edDegree) {
				obj['degree'] = data[edDegree];
			}
			if (edStart) {
				obj['year_started'] = data[edStart];
			}
			if (edEnd) {
				obj['year_ended'] = data[edEnd];
			}
			obj['_id'] = ed;
			thisEdArr.push(obj);
		});
		return thisEdArr;
	};
	const getNewEducationData = (data) => {
		let thisEdArr = [];
		const dataKeys = Object.keys(data);
		const edData = dataKeys.filter((d) => d.includes('school_'));
		edData.forEach((key, idx) => {
			let obj = {};
			const edSchool = `school_ed_${idx}`;
			if (!edSchool) {
				return;
			}
			const edDegree = `degree_ed_${idx}`;
			const edStart = `start_ed_date_${idx}`;
			const edEnd = `end_ed_date_${idx}`;
			if (edSchool) {
				obj['school'] = data[edSchool];
			}
			if (edDegree) {
				obj['degree'] = data[edDegree];
			}
			if (edStart) {
				obj['year_started'] = data[edStart];
			}
			if (edEnd) {
				obj['year_ended'] = data[edEnd];
			}
			thisEdArr.push(obj);
		});
		return thisEdArr;
	};

	const handleSave = async (data) => {
		let validNewLinks = [];
		let validNewExp = [];
		let validNewEd = [];
		let editedLinks = getEditedLinkData(data);
		const newLinks = getNewLinkData(data);
		let editedExp = getEditedExperienceData(data);
		const newExp = getNewExperienceData(data);
		let editedEd = getEditedEducationData(data);
		const newEd = getNewEducationData(data);
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
		if (newEd && newEd.length > 0) {
			validNewEd = newEd.filter((ed) => ed.school !== undefined);
			if (editedEd && editedEd.length > 0) {
				validNewEd.forEach((ed) => editedEd.push(ed));
			} else {
				editedEd = validNewEd;
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
					$set: {
						links: editedLinks,
						experience: editedExp,
						education: editedEd,
					},
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
						{errors.fullName && errors.fullName.message && errors.fullName.message}
						<Controller
							control={control}
							name='fullName'
							rules={{ required: 'Enter full name' }}
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
						{errors.email && errors.email.message && errors.email.message}
						<Controller
							control={control}
							name='email'
							rules={{ required: 'Enter email' }}
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
										<InputLabel
											htmlFor={`title-${link._id}`}
										>
											Title
										</InputLabel>
										<Controller
											control={control}
											name={`link_title_${link._id}`}
											rules={{
												required: 'Enter link title',
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
										<InputLabel
											htmlFor={`href-${link._id}`}
										>
											Href
										</InputLabel>
										<Controller
											control={control}
											name={`link_href_${link._id}`}
											rules={{
												required: 'Enter link href',
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
										<InputLabel
											htmlFor={`title-${newLinksArr.indexOf(
												link
											)}`}
										>
											Title
										</InputLabel>
										<Controller
											control={control}
											name={`link_title_${newLinksArr.indexOf(
												link
											)}`}
											rules={{
												required: 'Enter link title',
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
													id={`title-${newLinksArr.indexOf(
														link
													)}`}
												/>
											)}
											defaultValue=''
										/>
									</>
								}
								hrefInput={
									<>
										<InputLabel
											htmlFor={`href-${newLinksArr.indexOf(
												link
											)}`}
										>
											Href
										</InputLabel>
										<Controller
											control={control}
											name={`link_href_${newLinksArr.indexOf(
												link
											)}`}
											rules={{
												required: 'Enter link href',
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
													id={`href-${newLinksArr.indexOf(
														link
													)}`}
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
								companyLabel='Company Name:'
								jobLabel='Job Title:'
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
												sx={{ maxWidth: '200px' }}
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
												sx={{ maxWidth: '200px' }}
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
								idComp={`company-name-${newExpsArr.indexOf(
									exp
								)}`}
								idTitle={`job-title-${newExpsArr.indexOf(exp)}`}
								idStart={`start-${newExpsArr.indexOf(exp)}`}
								idEnd={`end-${newExpsArr.indexOf(exp)}`}
								companyLabel='Company Name:'
								jobLabel='Job Title:'
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
												id={`company-name-${newExpsArr.indexOf(
													exp
												)}`}
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
												id={`job-title-${newExpsArr.indexOf(
													exp
												)}`}
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
												sx={{ maxWidth: '200px' }}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-${newExpsArr.indexOf(
													exp
												)}`}
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
												sx={{ maxWidth: '200px' }}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-${newExpsArr.indexOf(
													exp
												)}`}
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
						sx={{ marginBottom: '2em !important' }}
					>
						Add Experience?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<Typography variant='h2'>Education</Typography>
					{edArr.length > 0 &&
						edArr.map((ed) => (
							<ExperienceForm
								key={ed._id}
								idComp={`school-ed-${ed._id}`}
								idTitle={`degree-ed-${ed._id}`}
								idStart={`start-ed-${ed._id}`}
								idEnd={`end-ed-${ed._id}`}
								deleteOne={() => deleteThisEd(ed._id)}
								companyLabel='School name:'
								jobLabel='Degree earned/Field of Study'
								companyNameComp={
									<Controller
										control={control}
										name={`school_ed_${ed._id}`}
										rules={{
											required:
												'Please enter the name of the school',
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
												id={`school-ed-${ed._id}`}
											/>
										)}
										defaultValue={ed.school}
									/>
								}
								jobTitleComp={
									<Controller
										control={control}
										name={`degree_ed_${ed._id}`}
										rules={{
											required:
												'Please enter the degree earned or field of study.',
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
												id={`degree-ed-${ed._id}`}
											/>
										)}
										defaultValue={ed.degree}
									/>
								}
								startDateComp={
									<Controller
										control={control}
										name={`start_ed_date_${ed._id}`}
										rules={{
											required:
												'Please enter the first date you started at this school',
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
												sx={{ maxWidth: '200px' }}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-ed-${ed._id}`}
											/>
										)}
										defaultValue={parseDate(
											ed.year_started
										)}
									/>
								}
								endDateComp={
									<Controller
										control={control}
										name={`end_ed_date_${ed._id}`}
										rules={{
											required:
												'Please Enter the date of your last day attending this school.',
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
												sx={{ maxWidth: '200px' }}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-ed-${ed._id}`}
											/>
										)}
										defaultValue={parseDate(ed.year_ended)}
									/>
								}
							/>
						))}
					{newEdArr.length > 0 &&
						newEdArr.map((ed) => (
							<ExperienceForm
								key={newEdArr.indexOf(ed)}
								idComp={`school-ed-${newEdArr.indexOf(ed)}`}
								idTitle={`degree-ed-${newEdArr.indexOf(ed)}`}
								idStart={`start-ed-${newEdArr.indexOf(ed)}`}
								idEnd={`end-ed-${newEdArr.indexOf(ed)}`}
								deleteOne={() =>
									deleteNewEd(newEdArr.indexOf(ed))
								}
								companyLabel='School name:'
								jobLabel='Degree earned/Field of Study:'
								companyNameComp={
									<Controller
										control={control}
										name={`school_ed_${newEdArr.indexOf(
											ed
										)}`}
										rules={{
											required:
												'Please enter the name of the school.',
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
												id={`school-ed-${newEdArr.indexOf(
													ed
												)}`}
											/>
										)}
										defaultValue=''
									/>
								}
								jobTitleComp={
									<Controller
										control={control}
										name={`degree_ed_${newEdArr.indexOf(
											ed
										)}`}
										rules={{
											required:
												'Please enter the degree earned or field of study.',
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
												id={`degree-ed-${newEdArr.indexOf(
													ed
												)}`}
											/>
										)}
										defaultValue=''
									/>
								}
								startDateComp={
									<Controller
										control={control}
										name={`start_ed_date_${newEdArr.indexOf(
											ed
										)}`}
										rules={{
											required:
												'Please enter the date you started school.',
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
												sx={{ maxWidth: '200px' }}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-ed-${newEdArr.indexOf(
													ed
												)}`}
											/>
										)}
										defaultValue=''
									/>
								}
								endDateComp={
									<Controller
										control={control}
										name={`end_ed_date_${newEdArr.indexOf(
											ed
										)}`}
										rules={{
											required:
												'Please Enter the date you completed school',
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
												sx={{ maxWidth: '200px' }}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-ed-${newEdArr.indexOf(
													ed
												)}`}
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
						onClick={addMoreEd}
						type='button'
						sx={{ marginBottom: '2em !important' }}
					>
						Add Education?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<ContainedButton
						disabled={!isValid}
						type='submit'
						sx={{ marginBottom: '2em !important' }}
					>
						Save
					</ContainedButton>
				</FormGroup>
			</form>
		</>
	);
};

export default EditUserComponent;
