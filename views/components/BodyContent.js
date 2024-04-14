import * as React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

const BodyContent = () => {
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<>
					<Header />
					<Main />
					<Footer />
				</>
			)}
		</>
	);
};

export default BodyContent;
