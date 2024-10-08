import { Dialog, Stack, Button } from "@mui/material";
import { handleAuthClick, handleSignoutClick } from '../../../apis/google/googleapi';


const GoogleDocsDialog = ({open, onClose}) => {
	const handleClose = () => {
		onClose()
	}
	const handleAuthClose = () => {
		handleAuthClick()
		onClose()
	}
	const handleSignOutClose = () => {
		handleSignoutClick()
		onClose()
	}
	return (
		<Dialog onClose={handleClose} open={open}>
			<h1>Google Account Authorization</h1>
			<Stack direction='row'>
				<Button id="authorize_button" variant='contained' onClick={handleAuthClose}>Authorize Google Docs</Button>
				<Button id="signout_button" variant='outlined' onClick={handleSignOutClose}>Sign Out Google Docs</Button>
				</Stack>
		</Dialog>
	)
}

export default GoogleDocsDialog