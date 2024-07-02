import * as React from 'react';
import {
	Button,
	Link,
	List,
	ListItem,
	Typography,
	Paper,
	Stack,
} from '@mui/material';
import Guage from './Guage.js';
import fetchData from '../getters/fetchData.js';

const getUser = fetchData('http://localhost:3000/api/user');

const PositionView = (props) => {
	const { companyName, jobTitle, jobFunction, requirements, guageValue } = props;
	const userDetails = getUser.read();
	const initialDummyContent = [
		{
			id: 'loading',
			res_content: 'Requirements are loading...',
			title: 'Loading...'
		},
	];
	const [experienceList, setExperienceList] = React.useState(initialDummyContent);
	const [dragging, setIsDragging] = React.useState('')
	const [elementMoving, setElementMoving] = React.useState()
	const [copied, setCopied] = React.useState(false)
	const [removeMe, setRemoveMe] = React.useState('Drop qualifications for experience here.')
	const resumeRef = React.useRef();
	React.useEffect(() => {
		const hasSortedResume = window.localStorage.getItem(companyName)
		// if the resume has previously been edited then load it:
		if(hasSortedResume) {
			setExperienceList(JSON.parse(hasSortedResume))
		}
		// if not merge the experience and qualifications into an array:
		if (
			!hasSortedResume &&
			requirements &&
			requirements.length > 0 &&
			userDetails[0].experience &&
			userDetails[0].experience.length > 0) {
			const newArr = [...userDetails[0].experience, ...requirements];
			if(!experienceList.includes(userDetails[0].experience[0]) && !experienceList.includes(requirements[0])) {
				setExperienceList(newArr);
			}
		}
	}, [requirements, userDetails]);

	const writeToClipboard = async () => {
		// save sorted list into local storage:
		window.localStorage.setItem(companyName, JSON.stringify(experienceList))
		//get inner text of resume doc:
		const thisResume = resumeRef.current.innerText;
		//remove drag handles:
		setCopied(true)
		setRemoveMe('')
		try {
			if(copied) {
				// copy text to clipboard:
				await navigator.clipboard.writeText(thisResume);
				// add drag handles back:
				setCopied(false)
				setRemoveMe('Drop qualifications for experience here.')
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const getIndex = (innerText) => {
		const emptArr = []
		const list = experienceList
		if(list.length > 0) {
			list.forEach((obj) => {
				if(obj.res_content && innerText === obj.res_content) {
					emptArr.splice(0, 1, list.indexOf(obj))
				}
				if(obj.title && innerText.includes(obj.title)) {
					emptArr.splice(0, 1, list.indexOf(obj))
				}
			})
			return emptArr[0]
		} else {
			return 0
		}
	}

	return (
		<>
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
				</span>{' '}
				Copy Plain To clipboard
			</Button>
			<Paper
				sx={{
					padding: '2em',
					paddingTop: '200px',
					position: 'relative',
					maxWidth: '1200px',
					margin: '0 auto',
					backgroundColor: '#f3ebeb',
				}}
				elevation={2}
			>
				<Guage value={guageValue} />
				{userDetails && userDetails.length > 0 && (
					<Stack
						ref={resumeRef}
						id='resume'
					>
						<Typography variant='h1'>
							{userDetails[0].name}
						</Typography>
						<Typography variant='h2'>{jobTitle}</Typography>
						<Typography>{jobFunction}</Typography>
						<Typography variant='body1'>
							<Link href={`mailto:${userDetails[0].email}`}>
								{userDetails[0].email}
							</Link>
						</Typography>
						{userDetails[0].links.map((link) => (
							<Typography
								key={userDetails[0].links.indexOf(link)}
								variant='body1'
							>
								<Link
									target='_blank'
									href={link.href}
								>
									{link.title}
								</Link>
							</Typography>
						))}
						<Stack
							sx={{
								touchAction: 'none',
								position: 'relative'
							}}
							onDragOver={(e) => {
								e.preventDefault()
								if(e.target.outerHTML.includes('drop-text')) {
									e.target.classList.add('show')
								}
							}}
							onDrop={async(e) => {
								e.preventDefault()
								if(e.target.outerHTML.includes('show')) {
									e.target.classList.remove('show')
								}
								const dropElIndex = await getIndex(e.target.innerText)
								let addIndex
								if(dropElIndex >= 0 && dropElIndex < experienceList.length) {
									addIndex = dropElIndex + 1
								} else {
									addIndex = dropElIndex - 1
								}
								
								const arr = experienceList.toSpliced(addIndex, 0, elementMoving)
								const oldIndex = arr.lastIndexOf(elementMoving)
								const nextArr = arr.toSpliced(oldIndex, 1)
								setExperienceList(nextArr)
							}}
						>
							<Typography variant='h2'>Experience</Typography>
							{experienceList &&
								experienceList.length > 0 &&
								experienceList.map((item, idx) => (
									<>
									{!item.title && !item.res_content ? <></> : (
										<>
										<div
											key={item._id}
											draggable={true}
											onDragStart={(e) => {
												setIsDragging('dragged')
												setElementMoving(item)
											}}
											onDragEnd={(e) => {
												setIsDragging('')
											}}
										>
											<div className={`item ${dragging}`} style={{ position: 'relative'}}>
													<div className={`dragHandle ${copied ? 'hide' : ''}`}>
														&#10495;
													</div>
												{item.title ? (
													<>
														<p className="drop-text"> {removeMe}</p>
														<Typography id="title" variant='h3'>
															{item.title}
														</Typography>
														<Typography variant='h4'>
															{item.company}
														</Typography>
														<Typography>
															From:{' '}
															{item.year_started}{' '}
															- To:{' '}
															{item.year_ended}
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
										</>
										)}
									</>
								))}
						</Stack>
					</Stack>
				)}
			</Paper>
		</>
	);
};

export default PositionView;
