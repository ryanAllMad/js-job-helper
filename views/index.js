import { hydrateRoot } from 'react-dom/client';
import UserLanding from './components/Views/UserLanding.js';
import JobsLanding from './components/Views/JobsLanding.js';
import SearchJob from './components/Views/SearchJob.js';
import UpdateRequirements from './components/Views/UpdateRequirements.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';
import EditResume from './components/Views/EditResume.js';



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
		element: <UserLanding />
	}
]);

hydrateRoot(
	document.getElementById('root'),
	<LocalizationProvider dateAdapter={AdapterDayjs}>
		<RouterProvider router={router} />
	</LocalizationProvider>
);
