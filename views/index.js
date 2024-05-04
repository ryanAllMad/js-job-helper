import { hydrateRoot } from 'react-dom/client';
import UserLanding from './components/Views/UserLanding.js';
import JobsLanding from './components/Views/JobsLanding.js';
import SearchJob from './components/Views/SearchJob.js';
import Resume from './components/Views/Resume.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';

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
		path: '/resume',
		element: <Resume />,
	},
	{
		path: '/search-job',
		element: <SearchJob />,
	},
]);

hydrateRoot(
	document.getElementById('root'),
	<LocalizationProvider dateAdapter={AdapterDayjs}>
		<RouterProvider router={router} />
	</LocalizationProvider>
);
