import { Dialog, Stack, Button, Typography, Paper } from '@mui/material';
import { handleAuthClick, saveDocument } from '../../../apis/google/googleapi';

const GoogleDocsDialog = ({ open, onClose, docTitle, insertText }) => {
	const handleClose = () => {
		onClose();
	};
	const handleAuthClose = () => {
		handleAuthClick();
	};
	return (
		<Dialog
			onClose={handleClose}
			open={open}
		>
			<Paper sx={{ padding: '2rem' }}>
			<Stack spacing={2}>
				<Typography component='h1' variant='h1'>
					Google Account Authorization
				</Typography>
				<Typography>
					Click Authorize Google Doc's then click Create Doc.
				</Typography>
				<Typography>
					Next, open Google Doc's in a new tab, you should see your
					new doc!
				</Typography>
			</Stack>
			<Stack direction='row' justifyContent="space-between" sx={{ marginTop: '2rem'}}>
				<Button
					id='authorize_button'
					variant='contained'
					onClick={handleAuthClose}
				>
					Authorize Google Docs
				</Button>
				<Button
					id='create-doc'
					variant='outlined'
					onClick={() => {
						saveDocument(docTitle, insertText).catch(console.error);
						onClose();
					}}
				>
					Create Doc
				</Button>
			</Stack>
			</Paper>

		</Dialog>
	);
};

export default GoogleDocsDialog;
