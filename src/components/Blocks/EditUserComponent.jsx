import * as React from 'react';
import { FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import BasicInput from './BasicInput.jsx';
import ContainedButton from './ContainedButton';
import UserLinkInputs from './UserLinkInputs';
import ExperienceForm from './ExperienceForm';
import fetchData from '../getters/fetchData';
import { deleteEntry } from '../helpers/deleteEntry';
import { deleteNewEntry } from '../helpers/deleteNewEntry';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { theme } from '../../entry-client.jsx'

const getUser = fetchData('http://localhost:5173/api/user');

const EditUserComponent = () => {
	const userDetails = getUser.read();
	const postUrl = userDetails && userDetails.length > 0 ? `http://localhost:5173/api/user/${userDetails[0]._id}` : 'http://localhost:5173/api/user'
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
	const [deleteUserState, setDeleteUserState] = React.useState(userDetails && userDetails.length > 0)

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

	const deleteUser = async () => {
		const promise = await fetch(
			`http://localhost:5173/api/user/${userDetails[0]._id}`,
			{
				method: 'DELETE',
			}
		);
		resetField('fullName', {defaultValue: ''} )
		resetField('email', {defaultValue: ''})
		setDeleteUserState(false)
		return promise
	}
	const deleteThisLink = (id) =>
		deleteEntry(
			id,
			`http://localhost:5173/api/user/links/${id}/${userDetails[0]._id}`,
			userDetails[0].links,
			linksArr,
			setLinksArr
		);
	const deleteThisExp = (id) => 
		deleteEntry(
			id,
			`http://localhost:5173/api/user/experience/${id}/${userDetails[0]._id}`,
			userDetails[0].experience,
			expArr,
			setExpArr
		);
	const deleteThisEd = (id) => 
		deleteEntry(
			id,
			`http://localhost:5173/api/user/education/${id}/${userDetails[0]._id}`,
			userDetails[0].education,
			edArr,
			setEdArr
		);

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
		const theseNewLinks = getNewLinkData(data);
		let editedExp = getEditedExperienceData(data);
		const theseNewExp = getNewExperienceData(data);
		let editedEd = getEditedEducationData(data);
		const theseNewEd = getNewEducationData(data);
		if (theseNewLinks && theseNewLinks.length > 0) {
			validNewLinks = theseNewLinks.filter((li) => li.title !== undefined);
			if (editedLinks && editedLinks.length > 0) {
				validNewLinks.forEach((link) => editedLinks.push(link));
			} else {
				editedLinks = validNewLinks;
			}
		}
		if (theseNewExp && theseNewExp.length > 0) {
			validNewExp = theseNewExp.filter((ex) => ex.title !== undefined);
			if (editedExp && editedExp.length > 0) {
				validNewExp.forEach((exp) => editedExp.push(exp));
			} else {
				editedExp = validNewExp;
			}
		}
		if (theseNewEd && theseNewEd.length > 0) {
			validNewEd = theseNewEd.filter((ed) => ed.school !== undefined);
			if (editedEd && editedEd.length > 0) {
				validNewEd.forEach((ed) => editedEd.push(ed));
			} else {
				editedEd = validNewEd;
			}
		}
		const postUserName = await fetch(
			postUrl,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: data.fullName,
					email: data.email,
					links: editedLinks,
					experience: editedExp,
					education: editedEd,
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
									inputProps={{'data-testid': 'full-name'}}
									value={value}
									inputRef={ref}
									type='text'
									id='full-name'
								/>
							)}
							defaultValue={userDetails && userDetails.length > 0 && userDetails[0].name ? userDetails[0].name : ''}
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
									inputProps={{'data-testid': 'email'}}
									type='text'
									id='email'
								/>
							)}
							defaultValue={userDetails && userDetails.length > 0 && userDetails[0].email ? userDetails[0].email : ''}
						/>
					</BasicInput>
					{deleteUserState && 
					<ContainedButton
						onClick={deleteUser}
						dataTestId={`user-delete`}
						type='button'
						sx={{
							color: '#111',
							backgroundColor: theme.palette.secondary.main,
							'&:hover': { backgroundColor: theme.palette.secondary.dark, color: '#fff' },
						}}
					>
						Delete User
					</ContainedButton>}
					<Typography variant='body2'>Add Links</Typography>
					{linksArr && linksArr.length > 0 &&
						linksArr.map((link) => (
							<UserLinkInputs
								key={link._id}
								defaultHref={link.href}
								deleteOne={() => deleteThisLink(link._id)}
								dataTestId={link.title}
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
													placeholder={value}
													inputRef={ref}
													type='text'
													id={`title-${link._id}`}
													inputProps={{'data-testid': `title-${link._id}`}}
												/>
											)}
											defaultValue={link.title ? link.title : ''}
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
													placeholder={value}
													inputRef={ref}
													type='text'
													id={`href-${link._id}`}
													inputProps={{'data-testid': `href-${link._id}`}}
												/>
											)}
											defaultValue={link.href ? link.href : ''}
										/>
									</>
								}
							/>
						))}
					{newLinksArr.length > 0 &&
						newLinksArr.map((link) => (
							<UserLinkInputs
								key={newLinksArr.indexOf(link)}
								dataTestId={newLinksArr.indexOf(link)}
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
													placeholder={value}
													inputRef={ref}
													type='text'
													id={`title-${newLinksArr.indexOf(
														link
													)}`}
													inputProps={{'data-testid': `title-${newLinksArr.indexOf(
														link
													)}`}}
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
													placeholder={value}
													inputRef={ref}
													inputProps={{'data-testid':`href-${newLinksArr.indexOf(
														link
													)}`}}
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
						dataTestId="add-links-button"
						type='button'
						onClick={addMoreLinks}
					>
						Add Links?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<Typography variant='h2'>Work Experience</Typography>
					{expArr && expArr.length > 0 &&
						expArr.map((exp) => (
							<ExperienceForm
								id={exp._id}
								buttonText="Experience"
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
												placeholder={value}
												inputProps={{'data-testid': `company_name_${exp._id}`}}
												inputRef={ref}
												type='text'
												id={`company-name-${exp._id}`}
											/>
										)}
										defaultValue={exp.company ? exp.company : ''}
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
												placeholder={value}
												inputRef={ref}
												type='text'
												id={`job-title-${exp._id}`}
												inputProps={{'data-testid': `job-title-${exp._id}`}}
											/>
										)}
										defaultValue={exp.title ? exp.title : ''}
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
											<DatePicker
												type='date'
												sx={{ maxWidth: '200px' }}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-${exp._id}`}
											/>
										)}
										defaultValue={
											exp.year_started ? dayjs(exp.year_started) : dayjs('')
										}
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
											<DatePicker
												type='date'
												sx={{ maxWidth: '200px' }}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-${exp._id}`}
											/>
										)}
										defaultValue={exp.year_ended ? dayjs(exp.year_ended) : dayjs('')}
									/>
								}
							/>
						))}
					{newExpsArr.length > 0 &&
						newExpsArr.map((exp) => (
							<ExperienceForm
								id={newExpsArr.indexOf(exp)}
								key={newExpsArr.indexOf(exp)}
								buttonText="Experience"
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
												inputProps={{'data-testid': `company-name-${newExpsArr.indexOf(
													exp
												)}`}}
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
												inputProps={{'data-testid': `job-title-${newExpsArr.indexOf(
													exp
												)}`}}
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
											<DatePicker
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
										defaultValue={dayjs('')}
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
											<DatePicker
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
										defaultValue={dayjs('')}
									/>
								}
							/>
						))}
				</FormGroup>
				<FormGroup className='user-form-group'>
					<ContainedButton
						onClick={addMoreExp}
						type='button'
						dataTestId="add-exp-button"
						sx={{ marginBottom: '2em !important' }}
					>
						Add Experience?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<Typography variant='h2'>Education</Typography>
					{edArr && edArr.length > 0 &&
						edArr.map((ed) => (
							<ExperienceForm
								id={ed._id}
								key={ed._id}
								buttonText="Education"
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
												inputProps={{'data-testid': `school-ed-${ed._id}`}}
												type='text'
												id={`school-ed-${ed._id}`}
											/>
										)}
										defaultValue={ed.school ? ed.school : ''}
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
												inputProps={{'data-testid': `degree-ed-${ed._id}`}}
											/>
										)}
										defaultValue={ed.degree ? ed.degree : ''}
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
											<DatePicker
												type='date'
												sx={{ maxWidth: '200px' }}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-ed-${ed._id}`}
											/>
										)}
										defaultValue={
											ed.year_started ? dayjs(ed.year_started) : dayjs('')
										}
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
											<DatePicker
												type='date'
												sx={{ maxWidth: '200px' }}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-ed-${ed._id}`}
											/>
										)}
										defaultValue={ed.year_ended ? dayjs(ed.year_ended) : dayjs('')}
									/>
								}
							/>
						))}
					{newEdArr.length > 0 &&
						newEdArr.map((ed) => (
							<ExperienceForm
								id={newEdArr.indexOf(ed)}
								buttonText="Education"
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
												inputProps={{'data-testid': `school-ed-${newEdArr.indexOf(
													ed
												)}`}}
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
												inputProps={{'data-testid': `degree-ed-${newEdArr.indexOf(
													ed
												)}`}}
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
											<DatePicker
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
										defaultValue={dayjs('')}
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
											<DatePicker
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
										defaultValue={dayjs('')}
									/>
								}
							/>
						))}
				</FormGroup>
				<FormGroup className='user-form-group'>
					<ContainedButton
						onClick={addMoreEd}
						type='button'
						dataTestId="add-ed-button"
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
