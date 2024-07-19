import * as React from 'react';
import { FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import UserLinkInputs from './UserLinkInputs.js';
import ExperienceForm from './ExperienceForm.js';
import { deleteNewEntry } from '../helpers/deleteNewEntry.js'
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const CreateUserComponent = () => {
	const {
		handleSubmit,
		control,
		resetField,
		formState: { isValid },
	} = useForm();
	const [newLinksArr, setNewLinksArr] = React.useState([]);
	const [newExpsArr, setNewExpsArr] = React.useState([]);
	const [newEdArr, setNewEdArr] = React.useState([])

	const addMoreLinks = () => {
		setNewLinksArr((prev) => prev.concat(prev.length));
	};
	const addMoreExp = () => {
		setNewExpsArr((prev) => prev.concat(prev.length));
	};
	const addMoreEd = () => {
		setNewEdArr((prev) => prev.concat(prev.length))
	}
	const deleteNewLinks = (id) => deleteNewEntry(id, newLinksArr, setNewLinksArr, resetField, 'link_title_', 'link_href_')
	const deleteNewExp = (id) => deleteNewEntry(id, newExpsArr, setNewExpsArr, resetField, 'company_name_', 'job_title_', 'start_date_', 'end_date_' )
	const deleteNewEd = (id) => deleteNewEntry(id, newEdArr, setNewEdArr, resetField, 'school_ed_', 'degree_ed_', 'start_ed_date_', 'end_ed_date_' )

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
	const getNewEducationData = (data) => {
		let edArr = [];
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
				obj['year_started'] = data[expStart];
			}
			if (edEnd) {
				obj['year_ended'] = data[expEnd];
			}
			edArr.push(obj);
		});
		return edArr;
	};

	const handleSave = async (data) => {
		const newLinks = getNewLinkData(data);
		const newExp = getNewExperienceData(data);
		const newEd = getNewEducationData(data)
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
				education: newEd
			}),
		});
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
									id='email'
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
					{newExpsArr.length > 0 &&
						newExpsArr.map((exp) => (
							<ExperienceForm
								id={newExpsArr.indexOf(exp)}
								key={newExpsArr.indexOf(exp)}
								idComp={`company-name-${newExpsArr.indexOf(exp)}`}
								idTitle={`job-title-${newExpsArr.indexOf(exp)}`}
								idStart={`start-${newExpsArr.indexOf(exp)}`}
								idEnd={`end-${newExpsArr.indexOf(exp)}`}
								companyLabel="Company Name:"
								jobLabel="Job Title:"
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
											<DatePicker
												sx={{ maxWidth: '200px'}}
												type='date'
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-${newExpsArr.indexOf(exp)}`}
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
												sx={{ maxWidth: '200px'}}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-${newExpsArr.indexOf(exp)}`}
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
						sx={{marginBottom: '2em !important'}}
					>
						Add Experience?
					</ContainedButton>
				</FormGroup>
				<FormGroup className='user-form-group'>
					<Typography variant='h2'>Education</Typography>
					{newEdArr.length > 0 &&
						newEdArr.map((ed) => (
							<ExperienceForm
								id={newEdArr.indexOf(ed)}
								key={newEdArr.indexOf(ed)}
								idComp={`school-ed-${newEdArr.indexOf(ed)}`}
								idTitle={`degree-ed-${newEdArr.indexOf(ed)}`}
								idStart={`start-ed-${newEdArr.indexOf(ed)}`}
								idEnd={`end-ed-${newEdArr.indexOf(ed)}`}
								deleteOne={() =>
									deleteNewEd(newEdArr.indexOf(ed))
								}
								companyLabel="School name:"
								jobLabel="Degree earned/Field of Study:"
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
												id={`school-ed-${newEdArr.indexOf(ed)}`}
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
												id={`degree-ed-${newEdArr.indexOf(ed)}`}
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
												sx={{ maxWidth: '200px'}}
												inputRef={ref}
												onChange={onChange}
												onBlur={onBlur}
												value={value}
												id={`start-ed-${newEdArr.indexOf(ed)}`}
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
												sx={{ maxWidth: '200px'}}
												onChange={onChange}
												onBlur={onBlur}
												inputRef={ref}
												value={value}
												id={`end-ed-${newEdArr.indexOf(ed)}`}
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
						sx={{marginBottom: '2em !important'}}
					>
						Add Education?
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
