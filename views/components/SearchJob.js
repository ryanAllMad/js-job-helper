import * as React from 'react';
import { FormControl, Paper, Stack } from '@mui/material';
import Header from './Header.js';
import PositionView from './PositionView.js';
import AutoComplete from './AutoComplete.js';

const SearchJob = () => {
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
								<FormControl>
									<AutoComplete
										label='Search Company'
										options={[{ label: 'Some dummy co.' }]}
									/>
								</FormControl>
							</Stack>
							<PositionView
								company='Dummy co'
								jobTitle='Software Eng'
								jobFunction='to maintain clean code'
								dateApplied='02/25/2016'
								requirements={[
									{ label: 'document codebase', cat: 'soft' },
								]}
								guageValue={75}
							/>
						</Paper>
					</main>
				</>
			)}
		</>
	);
};

export default SearchJob;
