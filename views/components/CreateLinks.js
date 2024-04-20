import * as React from 'react';
import LinksForm from './Blocks/LinksForm.js';

const CreateLinks = (props) => {
	const { key, deleteOne } = props;
	return (
		<LinksForm
			key={key}
			fetchUrl='http://localhost:3000/api/links'
			defaultTitle=''
			defaultHref=''
			deleteOne={deleteOne}
		/>
	);
};

export default CreateLinks;
