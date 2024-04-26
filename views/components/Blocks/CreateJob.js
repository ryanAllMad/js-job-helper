import * as React from 'react';
import BasicInput from './BasicInput.js';
import AutoComplete from './AutoComplete.js';
import Guage from './Guage.js';
import {
	Autocomplete,
	FormControl,
	Input,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { createFilterOptions } from '@mui/material/Autocomplete/index.js';
import ContainedButton from './ContainedButton.js';
import { useForm, Controller } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';

const getRequirements = fetchData('http://localhost:3000/api/requirements');

const filter = createFilterOptions();

const CreateJob = () => {
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm();
	const { control: controlReq, handleSubmit: handleSubmitRequirements } =
		useForm();
	const [reqIds, setReqIds] = React.useState(null);

	const theRequirements = getRequirements.read();
	const hasRequirements = theRequirements.length > 0 ? theRequirements : null;
	const value = 75;

	const handleSaveJob = async (data) => {
		const postJob = await fetch('http://localhost:3000/api/job-post', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				job_title: data.jobTitle,
				company_name: data.company,
				job_function: data.jobFunction,
				date_applied: data.dateApplied,
				requirements: reqIds.map((req) => req._id),
			}),
		});
		return postJob.json();
	};

	const handleSaveRequirements = async (data) => {
		const dataIdsToSave = data.requirements.filter((d) => d._id);
		setReqIds(dataIdsToSave);
		const newDataToSave = data.requirements.filter((d) => !d._id);
		if (data.requirements && newDataToSave) {
			const postRequirements = await fetch(
				'http://localhost:3000/api/requirements',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newDataToSave),
				}
			);
			return postRequirements.json();
		}
	};

	return (
		<>
			<Guage value={value} />
			<form
				key={1}
				onSubmit={handleSubmitRequirements((data) =>
					handleSaveRequirements(data)
				)}
			>
				<Stack>
					<ContainedButton type='submit'>Save All</ContainedButton>
					<FormControl>
						<Typography
							variant='h3'
							id='requirements'
						>
							Requirements
						</Typography>
						<Controller
							render={({ field: { onChange } }) => (
								<Autocomplete
									multiple
									id='enter-requirements'
									filterOptions={(options, params) => {
										const filtered = filter(
											options,
											params
										);
										const { inputValue } = params;
										const exists = options.some(
											(option) =>
												inputValue === option.req_title
										);
										if (inputValue !== '' && !exists) {
											filtered.push({
												req_title: inputValue,
											});
										}
										return filtered;
									}}
									options={
										hasRequirements
											? hasRequirements.map((req) => req)
											: [
													{
														req_title:
															'Example: Unit testing...',
													},
											  ]
									}
									getOptionKey={(option) => option._id}
									getOptionLabel={(option) =>
										option.req_title
									}
									renderInput={(params) => (
										<TextField
											{...params}
											variant='outlined'
											aria-labelledby='requirements'
										/>
									)}
									onChange={(e, data) => onChange(data)}
								/>
							)}
							onChange={([, data]) => data}
							name='requirements'
							control={controlReq}
						/>
					</FormControl>
				</Stack>
			</form>
			{reqIds && reqIds.length > 0 && (
				<form
					key={2}
					onSubmit={handleSubmit((data) => handleSaveJob(data))}
				>
					<Stack>
						<ContainedButton
							disabled={!isValid}
							type='submit'
						>
							Save
						</ContainedButton>
						<BasicInput
							label='Job Title'
							id='job-title'
						>
							<Controller
								control={control}
								name='jobTitle'
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
										aria-labelledby='job-title'
									/>
								)}
								defaultValue=''
							/>
						</BasicInput>
						<BasicInput
							label='Company name'
							id='company'
						>
							<Controller
								control={control}
								name='company'
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
										aria-labelledby='company'
									/>
								)}
								defaultValue=''
							/>
						</BasicInput>
						<BasicInput
							label='Job Function'
							id='job-function'
						>
							<Controller
								control={control}
								name='jobFunction'
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
										aria-labelledby='job-function'
									/>
								)}
								defaultValue=''
							/>
						</BasicInput>
						<BasicInput
							label='Date Applied'
							id='date-applied'
						>
							<Controller
								control={control}
								name='dateApplied'
								rules={{
									required:
										'Please enter the first date you started in this position',
								}}
								render={({
									field: { onChange, onBlur, ref, value },
								}) => (
									<Input
										type='date'
										inputRef={ref}
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										aria-labelledby='date-applied'
									/>
								)}
								defaultValue=''
							/>
						</BasicInput>
					</Stack>
				</form>
			)}
		</>
	);
};

export default CreateJob;
