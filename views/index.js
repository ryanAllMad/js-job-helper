import { hydrateRoot } from 'react-dom/client';
import AddExperience from './components/Views/AddExperience.js'
import AddLinks from './components/Views/AddLinks.js';
import EditUser from './components/EditUser.js'
import UserLanding from './components/Views/UserLanding.js';
import AddJob from './components/Views/AddJob.js';
import SearchJob from './components/Views/SearchJob.js';
import UpdateRequirements from './components/Views/UpdateRequirements.js';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/index.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLanding />,
	},
	{
		path: '/edit-user',
		loader: async () => {
			const userExists = await fetch('http://localhost:3000/api/user')
			if (!userExists || !userExists.data ||  userExists.data.length === 0) {
				return redirect('/')
			}
			return null
		},
		element: <EditUser />,
	},
	{
		path: '/experience',
		element: <AddExperience />
	},
	{
		path: '/links',
		element: <AddLinks />
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
