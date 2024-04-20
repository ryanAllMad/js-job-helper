import * as React from 'react';
import LinksForm from './Blocks/LinksForm.js';

const EditLinks = (props) => {
	const { linkId, defaultTitle, defaultHref, deleteOne, control } = props;
	return (
		<LinksForm
			key={linkId}
			fetchUrl={`http://localhost:3000/api/links/${linkId}`}
			defaultTitle={defaultTitle}
			defaultHref={defaultHref}
		/>
	);
};

export default EditLinks;
