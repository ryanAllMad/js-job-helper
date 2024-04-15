import * as React from 'react';
import { Box, Typography } from '@mui/material';
import {
	GaugeContainer,
	GaugeReferenceArc,
	GaugeValueArc,
} from '@mui/x-charts';

const Guage = (props) => {
	const {value} = props
	const [color, setColor] = React.useState('red')
	React.useEffect(() => {
		if(value > 70) {
			setColor('green')
		} else {
			setColor('red')
		}
	})
	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					width: '200px',
					height: '200px',
					top: 0,
					right: 0,
					zIndex: 2,
				}}
			>
				<GaugeContainer
					value={value}
					valueMax={100}
					sx={{
						'& svg path:last-of-type': {
							fill: color,
						},
					}}
				>
					<GaugeReferenceArc />
					<GaugeValueArc />
				</GaugeContainer>
				<Typography
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						fontWeight: 'bold',
						color: color,
					}}
					variant='body1'
				>
					{value}
				</Typography>
				<Typography
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, 25%)',
						fontWeight: 'bold',
						color: color,
					}}
					variant='body1'
				>
					Job Match
				</Typography>
			</Box>
		</>
	);
};
export default Guage
