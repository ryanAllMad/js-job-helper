import * as React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

export default function FormDialog(props) {
	const [open, setOpen] = React.useState(false);
	const {
		children,
		dialogTitle,
		dialogContent,
		onOpenDialog,
		onCloseDialog,
		onCancel,
		submitFormFunc
	} = props;

	const onSubmitForm = () => {
		handleClose();
		submitFormFunc()
	}

	const handleClickOpen = () => {
		setOpen(true);
		onOpenDialog()
	};

	const handleClose = () => {
		setOpen(false);
		onCloseDialog()
	};

	return (
		<>
			<Button
				variant='outlined'
				onClick={handleClickOpen}
			>
				Open form dialog
			</Button>
			<Dialog
				open={open}
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
					<Button onClick={onCancel}>Cancel</Button>
					<Button type='submit'>Submit</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
