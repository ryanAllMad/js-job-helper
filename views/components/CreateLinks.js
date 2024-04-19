import * as React from 'react';
import LinksComponent from './Blocks/LinksComponent.js';

const CreateLinks = (props) => {
	const { key, deleteOne } = props;
	return (
		<LinksComponent
			key={key}
			fetchUrl='http://localhost:3000/api/links'
			defaultTitle=''
			defaultHref=''
			deleteOne={deleteOne}
		/>
	);
};

export default CreateLinks;
