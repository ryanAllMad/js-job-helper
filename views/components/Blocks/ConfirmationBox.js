import * as React from 'react';
import ContainedButton from './ContainedButton.js';
import { Dialog, Paper, Typography, Stack } from '@mui/material';

const ConfirmationBox = (props) => {
	const { open, handleClose, handleSubmit } = props;
	return (
		<Dialog
			open={open}
			onClose={handleClose}
		>
			<Paper sx={{ padding: '2em'}}>
				<Stack>
					<h1>Did you save all of the requirements?</h1>
					<Typography>
						Be sure you saved all of the requirements for the job post before moving
						forward.
					</Typography>
					<Stack direction='row' justifyContent="center">
						<ContainedButton
							onClick={handleSubmit}
							type='submit'
						>
							Yes! Save and move on
						</ContainedButton>
						<ContainedButton
							sx={{
								backgroundColor: '#ba000d',
								'&:hover': { backgroundColor: '#e72d28' },
							}}
							onClick={handleClose}
							type='button'
						>
							No! Go back
						</ContainedButton>
					</Stack>
				</Stack>
			</Paper>
		</Dialog>
	);
};

export default ConfirmationBox;
