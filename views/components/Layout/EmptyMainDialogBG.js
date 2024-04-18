import * as React from 'react';
import Header from '../Layout/Header.js';

const EmptyMainDialogBG = (props) => {
	const { children } = props;
	const [isClient, setIsClient] = React.useState(false);

	React.useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<>
					<Header />
					<main style={{ height: '100vh'}}>
						{children}
					</main>
				</>
			)}
		</>
	);
};

export default EmptyMainDialogBG;
