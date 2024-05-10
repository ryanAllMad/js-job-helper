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
						sx={{ listStyle: 'none', marginTop: '0'}}
					>
						<Grid
							item
							component='li'
							sx={{ paddingTop: '16px'}}
						>
							<NavLink to='/'>User Info</NavLink>
						</Grid>
						<Grid
							item
							component='li'
							sx={{ paddingTop: '16px'}}
						>
							<NavLink to='/add-job'>Add a Job</NavLink>
						</Grid>
						<Grid
							item
							component='li'
							sx={{ paddingTop: '16px'}}
						>
							<NavLink to='/update-qualifications'>
								Update Qualifications
							</NavLink>
						</Grid>
						<Grid
							item
							component='li'
							sx={{ paddingTop: '16px'}}
						>
							<NavLink to='/search-resume'>Search Resume</NavLink>
						</Grid>
					</Grid>
				</nav>
			</AppBar>
		</header>
	);
};

export default Header;
