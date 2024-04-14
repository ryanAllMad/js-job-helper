import Head from './components/Head.js';

export default function Doc() {
	return (
		<>
			<html lang="en">
				<Head />
				<body>
					<div id="root" className='wrapper'></div>
				</body>
			</html>
		</>
	);
}
