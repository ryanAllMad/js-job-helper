const Head = (props) => {
	const {pageTitle} = props
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<title>{pageTitle}</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap'
					rel='stylesheet'
				/>
			</head>
		</>
	);
};

export default Head;
