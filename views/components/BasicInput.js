import * as React from 'react';
import {
	FormControl,
	InputLabel,
	Input,
} from '@mui/material';

const BasicInput = (props) => {
	const { label, handelChange, defaultValue } = props;

	return (
		<>
			<FormControl>
				<InputLabel>{label}</InputLabel>
				<Input
					defaultValue={defaultValue}
					onChange={handelChange}
					type='text'
				/>
			</FormControl>
		</>
	);
};

export default BasicInput;
