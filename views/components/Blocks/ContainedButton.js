import * as React from 'react';
import {
	Button,
} from '@mui/material';


const ContainedButton = (props) => {
	const {children, type, onClick, sx, disabled} = props

	return <Button disabled={disabled} type={type} onClick={onClick} variant='contained' sx={{ ...sx, maxWidth: 250}} size='medium'>{children}</Button>
}

export default ContainedButton