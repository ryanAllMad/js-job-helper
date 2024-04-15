import * as React from 'react';
import Header from './Header.js';
import AddExperience from './AddExperience.js';
import {
	Button,
	FormGroup,
	FormControl,
	InputLabel,
	Input,
	InputAdornment,
	Stack,
	Paper,
	Typography,
} from '@mui/material';

const User = () => {
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<>
					<Header />
					<main>
						<Paper
							sx={{
								padding: '2em',
								position: 'relative',
								maxWidth: '1200px',
								margin: '0 auto',
							}}
							elevation={2}
						>
							<Stack>
								<FormGroup>
									<Typography variant='h2'>
										Your Info
									</Typography>
									<FormControl>
										<InputLabel>Full Name</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl>
										<InputLabel>Email</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl>
										<InputLabel>Portfolio</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl>
										<InputLabel>Github</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl>
										<InputLabel>LinkedIn</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
									<FormControl>
										<InputLabel>Blog</InputLabel>
										<Input
											type='text'
											endAdornment={
												<InputAdornment position='end'>
													<Button>Enter</Button>
												</InputAdornment>
											}
										/>
									</FormControl>
								</FormGroup>
								<FormGroup>
									<Typography variant='h2'>
										Job Experience
									</Typography>
										<AddExperience />
								</FormGroup>
							</Stack>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default User;
