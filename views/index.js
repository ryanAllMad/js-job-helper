import { hydrateRoot } from 'react-dom/client';
import UserLanding from './components/Views/UserLanding.js';
import JobsLanding from './components/Views/JobsLanding.js';
import SearchJob from './components/Views/SearchJob.js';
import UpdateRequirements from './components/Views/UpdateRequirements.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';
import EditResume from './components/Views/EditResume.js';
import { createTheme, ThemeProvider } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#c52073',
			light: '#feacd5', 
			dark: '#640d39', 
		},
		secondary: {
			main: '#FFD700',
			light: '#faeb98',
			dark: '#9a840e',
		},
		error: {
			main: '#D32E05',
			light: '#D32E0569'
		},
		success: {
			main: '#0ba558',
			light: '#00FF7F',
			dark: '#006934'
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
