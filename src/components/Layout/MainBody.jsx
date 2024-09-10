import * as React from 'react';
import Header from '../Layout/Header';
import {
	Paper
} from '@mui/material';

const MainBody = ({ children, sx }) => {
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient ? (
				<>
					<Header />
					<main>
						<Paper
							sx={{
								padding: '2em',
								position: 'relative',
								maxWidth: '1200px',
								margin: '0 auto',
								...sx,
							}}
							elevation={2}
						>
							{children}
						</Paper>
					</main>
				</>
			) : (<></>)}
		</>
	);
};

export default MainBody;
