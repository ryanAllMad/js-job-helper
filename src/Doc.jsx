import Head from './components/Layout/Head';
import Footer from './components/Layout/Footer';

export default function Doc() {
	return (
		<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<Head pageTitle="JS Job Helper: Resume Builder" />
			{`<!--app-head-->`}
		</head>
		<body>
			<Footer />
			<div id="root" className='wrapper'>{`<!--app-html-->`}</div>
			<script type="module" src="/src/entry-client.jsx"></script>
		</body>
		</html>
	);
}