import * as React from 'react';
import {
	FormControl,
	InputLabel,
} from '@mui/material';

const BasicInput = (props) => {
	const { children, label, id, sx } = props;

	return (
		<>
			<FormControl sx={{...sx, marginTop: '2em'}}>
				<InputLabel id={id}>{label}</InputLabel>
				{children}
			</FormControl>
		</>
	);
};

export default BasicInput;
