import * as React from 'react';
import {
	Typography,
} from '@mui/material';
import JobForm from './JobForm.js';


const CreateJob = () => {
	return (
		<>
			<Typography>
				After following these 3 steps your resume will be ready at the
				bottom of the page. If you need to make edits after you complete
				this page, you can click the "Edit Resume" button at the bottom.
				<br />
				<strong>How to add a job post:</strong>
				<br />
				1. Fill out *ALL* of the Job Requirements. <br />
				2. Enter the Job Post Information <br />
				3. Fill out your qualifications
			</Typography>
			<JobForm 
				createJob={true}
				saveJobUrl={'http://localhost:3000/api/job-post'}
				defaultValueJobTitle=""
				defaultValueCompName=""
				defaultValueJobFunc=""
				defaultValueDateApplied=""
				submitButtonText="Save"
				defaultValueQualification=""
			/>
			</>
	);
};

export default CreateJob;
