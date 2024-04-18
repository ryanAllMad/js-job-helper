import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Grid } from '@mui/material';

const Header = () => {
	return (
		<header>
			<AppBar position='sticky'>
				<nav>
					<Grid
						container
						spacing={4}
						component='ul'
						sx={{ listStyle: 'none'}}
					>
						<Grid
							item
							component='li'
						>
							<NavLink to='/'>User Info</NavLink>
						</Grid>
						<Grid
							item
							component='li'
						>
							<NavLink to='/add-job'>Add a Job</NavLink>
						</Grid>
						<Grid
							item
							component='li'
						>
							<NavLink to='/update-requirements'>
								Update Requirements
							</NavLink>
						</Grid>
						<Grid
							item
							component='li'
						>
							<NavLink to='/search-job'>Search Job</NavLink>
						</Grid>
					</Grid>
				</nav>
			</AppBar>
		</header>
	);
};

export default Header;
