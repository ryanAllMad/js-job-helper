import { hydrateRoot } from 'react-dom/client';
import UserLanding from './components/Views/UserLanding.js';
import JobsLanding from './components/Views/JobsLanding.js';
import SearchJob from './components/Views/SearchJob.js';
import UpdateRequirements from './components/Views/UpdateRequirements.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';
import EditResume from './components/Views/EditResume.js';
import { createTheme, ThemeProvider, styled } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(115, 25, 242)',
			light: '#a05cfd',
			dark: '#340b6c',
		},
		secondary: {
			main: '#9ad058',
			light: '#f2ffa4',
			dark: '#3f7300',
		},
		error: {
			main: '#D32E05',
			light: '#D32E0569'
		}
	},
	typography: {
		fontSize: '18px',
		h1: {
			fontSize: '3rem'
		},
		h2: {
			fontSize: '2.5rem'
		},
		h3: {
			fontSize: '2.22rem'
		},
		h4: {
			fontSize: '1.88rem'
		}
	}
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLanding />,
	},
	{
		path: '/add-job',
		element: <JobsLanding />,
	},
	{
		path: '/job-post/:company_name',
		element: <EditResume />,
	},
	{
		path: '/update-qualifications',
		element: <UpdateRequirements />,
	},
	{
		path: '/search-resume',
		element: <SearchJob />,
	},
	{
		path: '*',
		element: <UserLanding />,
	},
]);

hydrateRoot(
	document.getElementById('root'),
	<ThemeProvider theme={theme}>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<RouterProvider router={router} />
		</LocalizationProvider>
	</ThemeProvider>
);
