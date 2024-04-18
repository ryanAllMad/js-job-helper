import { hydrateRoot } from 'react-dom/client';
import EditUser from './components/EditUser.js'
import UserLanding from './components/UserLanding.js';
import AddJob from './components/AddJob.js';
import SearchJob from './components/SearchJob.js';
import UpdateRequirements from './components/UpdateRequirements.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLanding />,
	},
	{
		path: '/edit-user',
		element: <EditUser />,
	},
	{
		path: '/add-job',
		element: <AddJob />,
	},
	{
		path: '/update-requirements',
		element: <UpdateRequirements />,
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
