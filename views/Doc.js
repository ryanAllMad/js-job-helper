import Head from './components/Layout/Head.js';
import Footer from './components/Layout/Footer.js';
// TODO

// link up database to project
// link up form components to database
// fine tune state and rendering

export default function Doc() {
	return (
		<>
			<html lang="en">
				<Head />
				<body>
					<div id="root" className='wrapper'></div>
					<Footer />
				</body>
			</html>
		</>
	);
}
