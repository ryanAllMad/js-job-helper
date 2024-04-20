import * as React from 'react';
import BasicInput from './BasicInput.js';
import ContainedButton from './ContainedButton.js';
import { FormGroup, Input, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const ExperienceForm = (props) => {
	const {
		handleSubmit,
		control,
		formState: { isDirty, isValid },
	} = useForm();
	const {
		key,
		fetchUrl,
		companyNameDefault,
		jobTitleDefault,
		startDateDefault,
		endDateDefault,
		deleteOne,
	} = props;
	const [saveText, setSaveText] = React.useState('Save Experience?');
	const handleSave = async (data) => {
		const postUserName = await fetch(fetchUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				company: data.companyName,
				title: data.jobTitle,
				year_started: data.startDate,
				year_ended: data.endDate,
			}),
		});
		if (postUserName.status === 201) {
			setSaveText('Saved!');
		}
		return postUserName.json();
	};
	return (
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
						rules={{ required: 'Please enter the company name' }}
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
						rules={{
							required:
								'Please enter the position title you held in this role',
						}}
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
					rules={{
						required:
							'Please enter the first date you started in this position',
					}}
					render={({ field: { onChange, onBlur, ref, value } }) => (
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
					rules={{
						required:
							'Please Enter the date of your last day in this position',
					}}
					render={({ field: { onChange, onBlur, ref, value } }) => (
						<Input
							type='date'
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
				sx={{ marginTop: '0' }}
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<ContainedButton disabled={!isValid} type='submit'>{saveText}</ContainedButton>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<ContainedButton
						onClick={deleteOne}
						type='button'
					>
						Delete Experience
					</ContainedButton>
				</Grid>
			</Grid>
		</form>
	);
};

export default ExperienceForm;
