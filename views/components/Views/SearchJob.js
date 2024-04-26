import * as React from 'react';
import { FormControl, Paper, Stack } from '@mui/material';
import MainBody from '../Layout/MainBody.js';
import PositionView from './PositionView.js';
import AutoComplete from '../Blocks/AutoComplete.js';

const SearchJob = () => {
	return (
		<>
			<MainBody>
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
					requirements={[{ label: 'document codebase', cat: 'soft' }]}
					guageValue={75}
				/>
			</MainBody>
		</>
	);
};

export default SearchJob;
