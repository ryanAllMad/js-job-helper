import * as React from 'react';
import { Button, List, ListItem, Typography, Stack } from '@mui/material';
import PositionView from './PositionView.js';
import fetchData from '../getters/fetchData.js';
import parseDate from '../helpers/parseDate.js';

const getUser = fetchData('http://localhost:3000/api/user');

const Resume = (props) => {
	const { fetchJobUrl, fetchResumeUrl } = props;
	const resumeRef = React.useRef();
	const userDeets = getUser.read();
	const [resumeExists, setResumeExists] = React.useState(false);
	const [job, setJob] = React.useState({});
	const [value, setValue] = React.useState(0);
	const [experienceList, setExperienceList] = React.useState([]);
	const [elementMoving, setElementMoving] = React.useState();
	const [removeIdx, setRemoveIdx] = React.useState()
	const [copied, setCopied] = React.useState(false);
	const [copyButtonText, setCopyButtonText] = React.useState(
		'Copy Plain to clipboard & Save'
	);

	const getJob = async () => {
		try {
			const reqPromise = await fetch(fetchJobUrl, {
				method: 'GET',
			})
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
	const getResume = async () => {
		try {
			const reqPromise = await fetch(fetchResumeUrl, {
				method: 'GET',
			})
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
	const writeToClipboard = async () => {
		const thisResume = resumeRef.current.innerText;
		setCopied(true);
		// save sorted list into DB:
		try {
			let reqPromise;
			// if resume exists update it:
			if (resumeExists) {
				reqPromise = await fetch(fetchResumeUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						company_name: job.company_name,
						resume_array: experienceList,
					}),
				});
			} else {
				// if not create a new sorted resume:
				reqPromise = await fetch('http://localhost:3000/api/resume/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						company_name: job.company_name,
						resume_array: experienceList,
					}),
				});
			}
			// copy text to clipboard:
			await navigator.clipboard.writeText(thisResume);
			// get text in clipboard
			const hasClipped = await navigator.clipboard.readText();
			if (thisResume !== hasClipped) {
				setCopyButtonText('Ooops! Try Again!');
			}
			if (hasClipped === thisResume) {
				setCopyButtonText('Copied & Saved!');
			}
			return reqPromise.json();
		} catch (err) {
			setCopyButtonText('Ooops! Try Again!');
			console.log(err);
		}
	};

	React.useEffect(() => {
		if (fetchJobUrl) {
			getJob().then((res) => {
				setJob(res[0]);
				const allRequirements = [];
				const allQualifications = [];
				res[0].requirements.forEach((req) =>
					allRequirements.push(req.req_title)
				);
				res[0].requirements.forEach((req) => {
					if (
						req.res_content &&
						(req.res_content !== '' || req.res_content !== ' ')
					) {
						allQualifications.push(req.res_content);
					}
				});
				const guage = Math.round(
					(allQualifications.length / allRequirements.length) * 100
				);
				setValue(guage);
			});
		}
	}, [fetchJobUrl]);

	React.useEffect(() => {
		//merge the experience and qualifications into an array if no sorted resume exists:
		const hasRequirements =
			job && job.requirements && job.requirements.length > 0;
		const hasResume =
			experienceList &&
			typeof experienceList === 'array' &&
			experienceList.length > 0;
		const hasExperience =
			userDeets[0].experience && userDeets[0].experience.length > 0;
		const cleanedRequirements = hasRequirements && job.requirements.filter((item) => item.res_content)
		if (hasRequirements && !hasResume && hasExperience) {
			setExperienceList([
				...userDeets[0].experience,
				...cleanedRequirements,
			]);
		}
		// get resume sorted list from DB
		if (fetchResumeUrl) {
			getResume().then((res) => {
				if (res[0] && res[0].resume_array.length > 0) {
					setExperienceList(res[0].resume_array);
					setResumeExists(true);
				}
			});
		}
	}, [fetchResumeUrl, job]);

	React.useEffect(() => {
		setTimeout(() => {
			if(copied) {
				setCopied(false)
				setCopyButtonText('Copy Plain to clipboard & Save')
			}
		}, 1500)
	}, [copied])

	return (
		<>
			<Stack spacing={2}>
				<Typography variant='h2'>Resume</Typography>
				<PositionView
					jobTitle={job.job_title}
					jobFunction={job.job_function}
					guageValue={value}
					ref={resumeRef}
					userDetails={userDeets}
				>
					<Stack
						sx={{
							touchAction: 'none',
							position: 'relative',
						}}
						onDragOver={(e) => {
							e.preventDefault()
						}}
						onDrop={async (e) => {
							e.preventDefault();
							let targetOrder
							if(e.target.dataset.order) {
								targetOrder = e.target.dataset.order
							}
							if(e.target.parentElement.dataset.order) {
								targetOrder = e.target.parentElement.dataset.order
							}
							if(e.target.parentElement.parentElement.dataset.order) {
								targetOrder = e.target.parentElement.parentElement.dataset.order
							}
							if(e.target.parentElement.parentElement.parentElement.dataset.order) {
								targetOrder = e.target.parentElement.parentElement.parentElement.dataset.order
							}
							if(targetOrder && experienceList && elementMoving && removeIdx) {
								const alteredList = experienceList.toSpliced(removeIdx, 1)
								const addedArr = alteredList.toSpliced(targetOrder +1, 0, elementMoving)
								setExperienceList(addedArr)
							}
						}}
					>
						<Typography variant='h2'>Experience</Typography>
						{experienceList['title'] ||
						experienceList['res_content'] ? (
							<>{'Still loading content...'}</>
						) : (
							<>
								{experienceList.map((item, idx) => (
									<>
										<div
											key={item._id}
											id={item._id}
											draggable={true}
											className='draggable-item'
											onDragStart={(e) => {
												setRemoveIdx(idx)
												setElementMoving(item);
											}}
											data-order={idx}
										>
											<div
												className="item"
												style={{
													position: 'relative',
												}}
											>
												<div
													className="dragHandle"
												>
												</div>
												<div>
												{item.title ? (
													<>
														<Typography
															id='title'
															variant='h3'
														>
															{item.title}
														</Typography>
														<Typography variant='h4'>
															{item.company}
														</Typography>
														<Typography>
															From:{' '}
															{parseDate(item.year_started)}{' '}
															- To:{' '}
															{parseDate(item.year_ended)}
														</Typography>
													</>
												) : (
													<>
														<List>
															<ListItem
																className='list-item'
																key={item._id}
															>
																{
																	item.res_content
																}
															</ListItem>
														</List>
													</>
												)}
												</div>
											</div>
										</div>
									</>
								))}
							</>
						)}
					</Stack>
				</PositionView>
				<Button
					variant='contained'
					onClick={writeToClipboard}
				>
					<span
						style={{
							fontSize: '50px',
							marginTop: '-25px',
							marginBottom: '-18px',
						}}
					>
						&#x2398;
					</span>
					{copyButtonText}
				</Button>
			</Stack>
		</>
	);
};

export default Resume;
