import * as React from 'react';
import {
	Button,
} from '@mui/material';


const ContainedButton = (props) => {
	const {children, type, onClick, sx, disabled, ariaPressed, dataTestId} = props

	return <Button data-testid={dataTestId} aria-pressed={ariaPressed} disabled={disabled} type={type} onClick={onClick} variant='contained' sx={{ ...sx, maxWidth: 250, marginTop: '2em', marginRight: '1em', display: 'inline-block'}} size='medium'>{children}</Button>
}

export default ContainedButton