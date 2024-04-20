import * as React from 'react';
import ContainedButton from './ContainedButton.js';
import EditExperience from '../EditExperience.js';
import CreateExperience from '../CreateExperience.js';
import { FormGroup, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import fetchData from '../getters/fetchData.js';


const getExperience = fetchData('http://localhost:3000/api/experience');

export default function ExperienceComponent() {
	const { formState: { isDirty, isValid } } = useForm();
	const allSavedExperience = getExperience.read();

	const [expArr, setExpArr] = React.useState([]);
	const [newExpsArr, setNewExpsArr] = React.useState([]);

	React.useEffect(() => {
		if (allSavedExperience && allSavedExperience.length > 0) {
			setExpArr(allSavedExperience);
		}
	}, [allSavedExperience, expArr]);

	const parseDate = (date) => {
		const dateFormat = new Date(date);
		const year = dateFormat.getFullYear();
		const month = dateFormat.toLocaleString('en-US', { month: '2-digit' });
		const day = dateFormat.toLocaleString('en-US', { day: '2-digit' });
		return `${year}-${month}-${day}`;
	};

	const addMoreExp = () => {
		setNewExpsArr((prev) => prev.concat(prev.length))
	}

	const deleteThisExp = async (id) => {
			const promise = await fetch(`http://localhost:3000/api/experience/${id}`, {
				method: 'DELETE'
			})
			if (allSavedExperience && allSavedExperience.length > 0) {
				setExpArr(allSavedExperience);
			}
			return promise
	}

	const deleteNewExp = (id) => {
		if(newExpsArr.length === 1) {
			setNewExpsArr([])
		} else {
			setNewExpsArr((prev) => prev.splice(id, 1))
		}
	}
	return (
		<>
			<Typography variant='body2'>Work Experience</Typography>
			<FormGroup>
				{expArr.length > 0 &&
					expArr.map((exp) => (
						<EditExperience
							expId={exp._id}
							companyNameDefault={exp.company}
							jobTitleDefault={exp.title}
							startDateDefault={parseDate(exp.year_started)}
							endDateDefault={parseDate(exp.year_ended)}
							deleteOne={() => deleteThisExp(exp._id)}
							onAddExp={addMoreExp}
						/>
					))}
				
				{newExpsArr.length > 0 &&
					newExpsArr.map((exp) => (
						<CreateExperience onAddExp={addMoreExp} key={newExpsArr.indexOf(exp)} deleteOne={() => deleteNewExp(newExpsArr.indexOf(exp))} />
					))}
			</FormGroup>

			<ContainedButton disabled={!isValid} onClick={addMoreExp} type='button'>
					Add More Experience?
				</ContainedButton>
		</>
	);
}
