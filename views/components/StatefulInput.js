import * as React from 'react';
import {
	FormControl,
	InputLabel,
	Input,
} from '@mui/material';

const StatefulInput = (props) => {
	const { label, handelChange } = props;
	return (
		<>
			<FormControl>
				<InputLabel>{label}</InputLabel>
				<Input
					defaultValue={''}
					onChange={handelChange}
					type='text'
				/>
			</FormControl>
		</>
	);
};

export default StatefulInput;
