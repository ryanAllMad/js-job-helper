import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLanding from './components/Views/UserLanding';
import JobsLanding from './components/Views/JobsLanding';
import SearchJob from './components/Views/SearchJob';
import UpdateRequirements from './components/Views/UpdateRequirements';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EditResume from './components/Views/EditResume';
import { createTheme, ThemeProvider } from '@mui/material';
import ErrorBoundary from './components/Layout/ErrorBoundary'

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
		fontSize: 18,
		h1: {
			fontSize: 32
		},
		h2: {
			fontSize: 28
		},
		h3: {
			fontSize: 22.5
		},
		h4: {
			fontSize: 20.5
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

ReactDOM.hydrateRoot(
	document.getElementById('root'),
	<ThemeProvider theme={theme}>
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ErrorBoundary>
			<RouterProvider router={router} />
			</ErrorBoundary>
		</LocalizationProvider>
	</ThemeProvider>
);
