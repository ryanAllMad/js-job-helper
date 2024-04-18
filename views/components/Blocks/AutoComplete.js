import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material'

const AutoComplete = (props) => {
	const {label, options} = props
	return (
		<>
		<Autocomplete renderInput={(params) => <TextField {...params} label={label} />} id="combo-box-requirements" options={options} />
		</>
	)
}

export default AutoComplete