import Head from './components/Head.js';
import Footer from './components/Footer.js';
// TODO
// create secure gitignored key file
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
