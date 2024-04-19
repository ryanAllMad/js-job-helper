import * as React from 'react';
import LinksComponent from './Blocks/LinksComponent.js';

const EditLinks = (props) => {
	const { linkId, defaultTitle, defaultHref, deleteOne } = props;
	return (
		<LinksComponent
			key={linkId}
			fetchUrl={`http://localhost:3000/api/links/${linkId}`}
			defaultTitle={defaultTitle}
			defaultHref={defaultHref}
			deleteOne={deleteOne}
		/>
	);
};

export default EditLinks;
