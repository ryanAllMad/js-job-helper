import * as React from 'react';
import EmptyMainDialogBG from '../Layout/EmptyMainDialogBG.js';
import BasicDialog from '../Blocks/BasicDialog.js';
import ContainedButton from '../Blocks/ContainedButton.js';
import ExperienceComponent from '../Blocks/ExperienceComponent.js';

export default function AddExperience() {
	const [experienceArr, setExpArr] = React.useState([1]);
	const addMoreExp = () => {
		setExpArr((prev) => prev.concat(prev.length));
	};
	return (
		<>
			<EmptyMainDialogBG>
				<BasicDialog
					dialogTitle='Experience'
					dialogContent='Add work experience details to go into your resume.'
					submitFormFunc={() =>
						console.log(`${jobTitle} & ${companyName}`)
					}
				>
					{' '}
					<>
						{experienceArr.map((exp) => (
							<ExperienceComponent
								key={experienceArr.indexOf(exp)}
							/>
						))}
					</>
					<ContainedButton onClick={addMoreExp}>
						Add more experience?
					</ContainedButton>
				</BasicDialog>
			</EmptyMainDialogBG>
		</>
	);
}
