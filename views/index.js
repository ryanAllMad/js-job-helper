import { hydrateRoot } from 'react-dom/client';
import BodyContent from './components/BodyContent.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <BodyContent />,
	},
	{
		path: '/company',
		element: <div>search company</div>,
	},
	{
		path: '/enter-requirements',
		element: <div>Enter requirements</div>,
	},
	{
		path: '/enter-responses',
		element: <div>enter responses</div>,
	},
]);


hydrateRoot(document.getElementById('root'), <RouterProvider router={router} />);