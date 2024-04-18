import * as React from 'react';
import {
	FormControl,
	InputLabel,
	Input,
} from '@mui/material';

const BasicInput = (props) => {
	const { label, handleChange, defaultValue } = props;

	return (
		<>
			<FormControl>
				<InputLabel>{label}</InputLabel>
				<Input
					aria-labelledby={label}
					defaultValue={defaultValue}
					onChange={handleChange}
					type='text'
				/>
			</FormControl>
		</>
	);
};

export default BasicInput;
