import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { FormGroup, Input, Grid, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

export default function ExperienceComponent(props) {
	const { handleSubmit, control } = useForm();
	const { key, fetchUrl, companyNameDefault, jobTitleDefault, startDateDefault, endDateDefault, deleteOne } = props

	const handleSave = async (data) => {
		const postUserName = await fetch(
			fetchUrl,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					company: data.companyName,
					title: data.jobTitle,
					year_started: data.startDate,
					year_ended: data.endDate
				}),
			}
		);
		return postUserName.json();
	};
	return (
		<>
			<Typography variant='body2'>Work Experience</Typography>
			<form
				key={key}
				onSubmit={handleSubmit((data) => handleSave(data))}
			>
				<FormGroup>
					<BasicInput
						id='companyName'
						label='Company Name'
					>
						<Controller
							control={control}
							name='companyName'
							render={({
								field: { onChange, onBlur, value, ref },
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
							defaultValue={companyNameDefault}
						/>
					</BasicInput>
					<BasicInput
						id='jobTitle'
						label='Job Title'
					>
						<Controller
							control={control}
							name='jobTitle'
							render={({
								field: { onChange, onBlur, value, ref },
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
							defaultValue={jobTitleDefault}
						/>
					</BasicInput>
					<Controller
						control={control}
						name='startDate'
						render={({
							field: { onChange, onBlur, ref, value },
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
						defaultValue={startDateDefault}
					/>
					<Controller
						control={control}
						name='endDate'
						render={({
							field: { onChange, onBlur, ref, value },
						}) => (
							<Input
								type="date"
								onChange={onChange}
								onBlur={onBlur}
								inputRef={ref}
								value={value}
								label='End Date'
							/>
						)}
						defaultValue={endDateDefault}
					/>
				</FormGroup>
				<Grid
				fullWidth
				container
				spacing={2}
				alignItems='center'
				justifyContent='center'
				sx={{ marginTop: '0'}}
			>
				<Grid item xs={12} md={6}>
				<ContainedButton type='submit'>Save Experience</ContainedButton>
				</Grid>
				<Grid item xs={12} md={6}>
					<ContainedButton onClick={deleteOne} type="button">Delete Experience</ContainedButton>
				</Grid>
				</Grid>
			</form>
		</>
	);
}
