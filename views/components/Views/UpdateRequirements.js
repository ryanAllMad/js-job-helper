import * as React from 'react';
import {
	Autocomplete,
	FormControl,
	Grid,
	Stack,
	TextField,
	Input,
	Typography
} from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import ContainedButton from '../Blocks/ContainedButton.js';
import AddQualification from '../Blocks/AddQualification.js';
import { Controller, useForm } from 'react-hook-form'
import fetchData from '../getters/fetchData.js';

const getRequirements = fetchData('http://localhost:3000/api/requirements/');

const UpdateRequirements = () => {
	const { control, handleSubmit, formState: { isValid: reqValid, isSubmitting, isSubmitSuccessful } } = useForm();
	const {
		control: controlRes,
		handleSubmit: handleSubmitResponses,
		formState: { isValid },
		reset,
	} = useForm();
	const allReqs = getRequirements.read();
	const [reqIDLocation, setReqIDLocation] = React.useState(null)
	const [qualification, setQualification] = React.useState()
	const [addQualState, setAddQualState] = React.useState(false)
	const [remQualState, setRemQualState] = React.useState(false)

	const getRequriement = async (reqLocation) => {
		try {
			const reqPromise = await fetch(
				`http://localhost:3000/api/requirements/${reqLocation}`,
				{
					method: 'GET',
				}
			)
				.then((res) => res.json())
				.then((res) => {
					if (res.status === 'success') {
						if (!res.data) {
							console.log('no data');
						}
						return res.data;
					} else {
						console.log(res.status);
					}
				});
			return reqPromise;
		} catch (err) {
			console.log(err);
		}
	};
	const handleSetReqLocation = (data) => {
		const thisReq = allReqs.filter((req) => req.req_title === data.searchRequirements)
		if(thisReq && thisReq.length > 0) {
			if(!thisReq[0]._id) {
				return
			}
			setReqIDLocation(thisReq[0]._id)
			getRequriement(thisReq[0]._id).then((res => {
				setQualification(res)
			}))
		}
	};

	const handleAddResponse = async (data, id) => {
		const updateRequirement = await fetch(
			`http://localhost:3000/api/requirements/${id}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					res_content: data.updateQualification
				}),
			}
		);
		if (updateRequirement.status === 200) {
			setAddQualState(true)
			setTimeout(() => {
				setAddQualState(false)
			}, [500])

		}
		return updateRequirement.json();
	};
	const handleMissing = async (id) => {
		const updateRequirement = await fetch(
			`http://localhost:3000/api/requirements/${id}`,
			{
				method: 'DELETE',
			}
		);
		if(updateRequirement.status === 204) {
			setRemQualState(true)
			setTimeout(() => {
				setRemQualState(false)
			}, [500])
		}
		setReqIDLocation(null)
		return updateRequirement;
	}
	React.useEffect(() => {
		if((isSubmitting || isSubmitSuccessful) && qualification) {
			if(!qualification.res_content) {
				reset({updateQualification: ''})
			} else {
				reset({updateQualification: qualification.res_content})
			}
		}
	}, [qualification, isSubmitting, isSubmitSuccessful])

	return (
		<>
			<MainBody>
				<Stack>
				<Typography variant='h1'>Update Your Qualifications</Typography>
					{allReqs &&
					allReqs.length > 0 ? (
						<form
							key={1}
							onSubmit={handleSubmit((data) =>
								handleSetReqLocation(data)
							)}
						>
							<FormControl sx={{ width: '100%' }}>
								<Grid
									container
									spacing={4}
									sx={{ width: '100%' }}
								>
									<Grid
										item
										xs={12}
										md={6}
									>
										<Controller
											control={control}
											onChange={(data) => data}
											name='searchRequirements'
											rules={{ required: true }}
											render={({
												field: { onChange, value, ref },
											}) => (
												<Autocomplete
													disableClearable
													id='requirements-search-input'
													noOptionsText="Job doesn't exist. Go to add a job page."
													options={allReqs.map(
														(req) =>
															req.req_title
													)}
													renderInput={(params) => (
														<TextField
															{...params}
															variant='outlined'
															label='Search Requirement Keywords'
															type='search'
														/>
													)}
													onChange={(e, data) => {
														setReqIDLocation(null);
														onChange(data);
													}}
													value={value}
													ref={ref}
												/>
											)}
											defaultValue=''
										/>
									</Grid>
									<Grid
										item
										xs={12}
										md={6}
									>
										<ContainedButton
											type='submit'
											disabled={!reqValid}
											sx={{
												margin: '0.33em auto 0.25em !important;',
											}}
										>
											Ok
										</ContainedButton>
									</Grid>
								</Grid>
							</FormControl>
						</form>
					) : (
						'No job requirements have been input. Go to "add a job" to add requirements.'
					)}
				</Stack>
				{reqIDLocation && qualification && 
				<>
				{qualification.res_content &&
				(
					<AddQualification key={2} onSubmit={handleSubmitResponses((data) =>
						handleAddResponse(data, qualification._id)
					)}
					qualificationDesc={`Update this qualification`}
					thisReq={qualification.req_title}
					addButtonText={!addQualState ? 'Update Qualification' : 'Qualification Updated!'}
					removeButtonText={!remQualState ? 'Set to Missing Qualification' : 'Qualification Removed'}
					addButtonState={!isValid}
					addPessedButtonState={addQualState}
					removePressedButtonState={remQualState}
					onMissing={() => handleMissing(qualification._id)}>
						<Controller
							control={controlRes}
							name='updateQualification'
							rules={{ required: true }}
							render={({
								field: { onChange, onBlur, value, ref },
							}) => (
								<Input
									onChange={onChange}
									onBlur={onBlur}
									placeholder='Update qualification'
									value={value}
									inputRef={ref}
									type='text'
									multiline
									rows={4}
									id='add-response'
								/>
							)}
							defaultValue={qualification.res_content}
						/>
					</AddQualification>
				)}
				{!qualification.res_content &&
				(
					<AddQualification key={2} onSubmit={handleSubmitResponses((data) =>
						handleAddResponse(data, qualification._id)
					)}
					qualificationDesc={`Update this qualification`}
					thisReq={qualification.req_title}
					addButtonText={!addQualState ? 'Update Qualification' : 'Qualification Updated!'}
					removeButtonText={!remQualState ? 'Set to Missing Qualification' : 'Qualification Removed'}
					addButtonState={!isValid}
					addPessedButtonState={addQualState}
					removePressedButtonState={remQualState}
					onMissing={() => handleMissing(qualification._id)}>
						<Controller
							control={controlRes}
							name='updateQualification'
							rules={{ required: true }}
							render={({
								field: { onChange, onBlur, value, ref },
							}) => (
								<Input
									onChange={onChange}
									onBlur={onBlur}
									placeholder='Update qualification'
									value={value}
									inputRef={ref}
									type='text'
									multiline
									rows={4}
									id='add-response'
								/>
							)}
							defaultValue=""
						/>
					</AddQualification>
				)
				}
				</>
				}
			</MainBody>
		</>
	);
};

export default UpdateRequirements;
