import * as React from 'react';
import {
	FormControl,
	InputLabel,
} from '@mui/material';

const BasicInput = (props) => {
	const { children, label, id, sx, labelSx } = props;

	return (
		<>
			<FormControl sx={{...sx, marginTop: '2em'}}>
				<InputLabel sx={{...labelSx}} htmlFor={id}>{label}</InputLabel>
				{children}
			</FormControl>
		</>
	);
};

export default BasicInput;
