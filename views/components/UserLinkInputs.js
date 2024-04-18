import * as React from 'react';
import {
	FormControl,
	Grid,
	InputLabel,
	Input,
	Typography,
} from '@mui/material';
import ContainedButton from './ContainedButton.js';

const UserLinkInputs = (props) => {
	const { key, handleLinkSave, handelTitleChange, handleHrefChange, defaultHrefValue, defaultTitleValue } = props;
	const [buttonText, setButtonText] = React.useState('Add')
	const [buttonState, setButtonStte] = React.useState(false)

	const additionalClickFunction = () => {
		setButtonText('Added')
		setButtonStte(true)
		handleLinkSave()
	}

	return (
		<>
		<Typography variant='h4'>Add Link</Typography>
		<Grid key={key} fullWidth container spacing={2} alignItems="center" justifyContent="center">
			<Grid xs={12} md={4} item>
			<FormControl>
				<InputLabel>Title</InputLabel>
				<Input
					disabled={buttonState}
					defaultValue={defaultTitleValue}
					onChange={handelTitleChange}
					type='text'
				/>
			</FormControl>
			</Grid>
			<Grid xs={12} md={4} item>
			<FormControl>
				<InputLabel>Href</InputLabel>
				<Input
					disabled={buttonState}
					defaultValue={defaultHrefValue}
					onChange={handleHrefChange}
					type='text'
				/>
			</FormControl>
			</Grid>
			<Grid xs={12} md={4} item sx={{ textAlign: 'right' }}>
				<ContainedButton disabled={buttonState} onClick={additionalClickFunction}>{buttonText}</ContainedButton>
			</Grid>
			</Grid>
		</>
	);
};

export default UserLinkInputs;
