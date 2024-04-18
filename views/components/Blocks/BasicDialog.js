import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

export default function BasicDialog(props) {
	const [isClient, setIsClient] = React.useState(false);
	const navigate = useNavigate()
	const close = () => navigate('/')
	const {
		children,
		dialogTitle,
		dialogContent,
		submitFormFunc
	} = props;

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	const onSubmitForm = () => {
		handleClose();
		submitFormFunc()
	}

	const handleClose = () => {
		return close()
	};
	

	return (
		<>
			{isClient && 
						<Dialog
						open
						onClose={handleClose}
						PaperProps={{
							component: 'form',
							onSubmit: onSubmitForm,
						}}
					>
						<DialogTitle>{dialogTitle}</DialogTitle>
						<DialogContent>
							<DialogContentText>{dialogContent}</DialogContentText>
							{children}
						</DialogContent>
						<DialogActions>
							<Link to={'/'}>Cancel</Link>
							<Button type='submit'>Submit</Button>
						</DialogActions>
					</Dialog>
			}
		</>
	);
}
