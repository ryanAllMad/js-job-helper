import * as React from 'react';
import { FormGroup, Typography } from '@mui/material';
import CreateLinks from '../CreateLinks.js'
import EditLinks from '../EditLinks.js'
import ContainedButton from './ContainedButton.js';
import fetchData from '../getters/fetchData.js';
import { useForm, useFormState } from 'react-hook-form';

const getLinks = fetchData('http://localhost:3000/api/links');

export default function LinksComponent() {
	const allSavedLinks = getLinks.read();
	const {control} = useForm()
	const {isValid} = useFormState({control})
	const [linksArr, setLinksArr] = React.useState([]);
	const [newLinksArr, setNewLinksArr] = React.useState([]);


	React.useEffect(() => {
		if (allSavedLinks && allSavedLinks.length > 0) {
			setLinksArr(allSavedLinks);
		}

	}, [allSavedLinks, linksArr]);


	const deleteThisLink = async (id) => {
		const promise = await fetch(`http://localhost:3000/api/links/${id}`, {
			method: 'DELETE'
		})
		if (allSavedLinks && allSavedLinks.length > 0) {
			setLinksArr(allSavedLinks);
		}
		return promise
	}
	const deleteNewLinks = (id) => {
		if(newLinksArr.length === 1) {
			setNewLinksArr([])
		} else {
			setNewLinksArr((prev) => prev.splice(id, 1))
		}
	}
	const addMoreLinks = () => {
		setNewLinksArr((prev) => prev.concat(prev.length))
	}
	
	return (
		<>
			<Typography variant='body2'>Add Link</Typography>
			<FormGroup>
				{linksArr.length > 0 &&
					linksArr.map((link) => (
						<EditLinks
							linkId={link._id}
							defaultTitle={link.title}
							defaultHref={link.href}
							deleteOne={() => deleteThisLink(link._id)}
						/>
					))}
				{newLinksArr.length > 0 &&
					newLinksArr.map((link) => (
						<CreateLinks key={newLinksArr.indexOf(link)} deleteOne={() => deleteNewLinks(newLinksArr.indexOf(link))} />
					))}
			</FormGroup>
			<ContainedButton disabled={!isValid} type='button' onClick={addMoreLinks}>Add More Links?</ContainedButton>
		</>
	);
}
