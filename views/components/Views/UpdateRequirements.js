import * as React from 'react';
import {
	Autocomplete,
	FormControl,
	Grid,
	Stack,
	TextField,
	Input
} from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import ContainedButton from '../Blocks/ContainedButton.js';
import AddQualification from '../Blocks/AddQualification.js';
import { Controller, useForm } from 'react-hook-form'
import fetchData from '../getters/fetchData.js';

const getRequirements = fetchData('http://localhost:3000/api/requirements/');

const UpdateRequirements = () => {
	const { control, handleSubmit } = useForm();
	const {
		control: controlRes,
		handleSubmit: handleSubmitResponses,
		formState: { isSubmitSuccessful },
		reset,
	} = useForm();
	const allReqs = getRequirements.read();
	const [reqTitleLocation, setReqTitleLocation] = React.useState(null)
	const [qualification, setQualification] = React.useState()

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
		setReqTitleLocation(data.searchRequirements)
		getRequriement(data.searchRequirements).then((res => {
			setQualification(res)
			reset({ updateQualification: res[0].res_content})
		}))
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
		return updateRequirement.json();
	};
	const handleMissing = async (id) => {
		const updateRequirement = await fetch(
			`http://localhost:3000/api/requirements/${id}`,
			{
				method: 'DELETE',
			}
		);
		setReqTitleLocation(null)
		return updateRequirement;
	}
	React.useEffect(() => {
		if(isSubmitSuccessful) {
			reset()
		}
	}, [isSubmitSuccessful])

	return (
		<>
			<MainBody>
				<Stack>
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
											render={({
												field: { onChange },
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
														setReqTitleLocation(null);
														onChange(data);
													}}
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
				{reqTitleLocation && qualification && qualification.length > 0 && (
					<AddQualification key={2} onSubmit={handleSubmitResponses((data) =>
						handleAddResponse(data, qualification[0]._id)
					)}
					qualificationDesc={`Update this qualification`}
					thisReq={qualification[0].req_title}
					addButtonText="Update Qualification"
					removeButtonText="Set to Missing Qualification"
					onMissing={() => handleMissing(qualification[0]._id)}>
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
									aria-labelledby='add-response'
									aria-describedby='qualifications-desc'
								/>
							)}
							defaultValue={qualification[0].res_content}
						/>
					</AddQualification>
				)}
			</MainBody>
		</>
	);
};

export default UpdateRequirements;
