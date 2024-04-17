import * as React from 'react';
import {
	Button,
} from '@mui/material';


const ContainedButton = (props) => {
	const {children, disabled, onClick, sx} = props

	return <Button disabled={disabled} onClick={onClick} variant='contained' sx={{ ...sx, maxWidth: 250}} size='medium'>{children}</Button>
}

export default ContainedButton