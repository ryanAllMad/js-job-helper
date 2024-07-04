import * as React from 'react';
import {
	Typography,
	Stack,
	FormControl,
	InputLabel,
	AppBar,
	LinearProgress,
	FormHelperText,
} from '@mui/material';
import ContainedButton from './ContainedButton.js';
import ConfirmationBox from './ConfirmationBox.js';
import { theme } from '../../index.js'

const AddRequirements = (props) => {
	const { progress, key, onSubmit, reqDisableState, children } = props;
	const [open, setOpen] = React.useState(false);

	const handleSubmit = () => {
		onSubmit();
		setOpen(false);
	};
	const openDialog = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<AppBar
				sx={{
					backgroundColor: '#fff',
					color: theme.palette.primary.dark,
					boxShadow: 'none',
				}}
				position='sticky'
			>
				<Typography>
					<strong>Current Resume Status:</strong>
				</Typography>
				<LinearProgress
					variant='determinate'
					value={progress}
				/>
			</AppBar>
			<form
				key={key}
				onSubmit={handleSubmit}
			>
				<Stack>
					<Typography
						variant='h2'
						id='requirements'
					>
						Requirements
					</Typography>

					<FormControl>
						<FormHelperText id='enter-requirements'>
							Enter the keywords for each job requirement.
							(Example: 'Documenting codebase'...) If a
							requirement exists in the dropdown that is similar
							to one in the job post, select the one that already
							exists. It's important to input ALL requirements
							even if you don't have those requirements. This will
							help your Job Match meter give you an accurate
							reading.
						</FormHelperText>
						<InputLabel
							sx={{ position: 'relative'}}
							htmlFor='enter-requirements'
						>
							Input Each Job Requirement & Nice to Have's
						</InputLabel>
						{children}
					</FormControl>
					<ContainedButton
						disabled={reqDisableState}
						onClick={openDialog}
						type='button'
					>
						Save All
					</ContainedButton>
					<ConfirmationBox
						open={open}
						handleClose={handleClose}
						handleSubmit={handleSubmit}
					/>
				</Stack>
			</form>
		</>
	);
};

export default AddRequirements;
