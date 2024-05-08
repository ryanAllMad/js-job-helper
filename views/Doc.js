import Head from './components/Layout/Head.js';
import Footer from './components/Layout/Footer.js';

export default function Doc() {
	return (
		<>
			<html lang="en">
				<Head pageTitle="JS Job Helper" />
				<body>
					<div id="root" className='wrapper'></div>
					<Footer />
				</body>
			</html>
		</>
	);
}
