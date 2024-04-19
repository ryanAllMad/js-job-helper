import * as React from 'react';
import {
	FormControl,
	InputLabel,
} from '@mui/material';

const BasicInput = (props) => {
	const { children, label, id } = props;

	return (
		<>
			<FormControl>
				<InputLabel id={id}>{label}</InputLabel>
				{children}
			</FormControl>
		</>
	);
};

export default BasicInput;
