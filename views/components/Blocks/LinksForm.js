import * as React from 'react';
import { Input } from '@mui/material';
import UserLinkInputs from './UserLinkInputs.js';
import { useForm, Controller } from 'react-hook-form';

const LinksForm = (props) => {
	const { handleSubmit, control, formState: {isValid} } = useForm();
	const { key, fetchUrl, defaultTitle, defaultHref, deleteOne } = props;
	const [saveText, setSaveText] = React.useState('Save Links');

	const handleSave = async (data) => {
		const postUserName = await fetch(fetchUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: data.title,
				href: data.href,
			}),
		});
		if (postUserName.status === 201) {
			setSaveText('Saved!');
		}
		return postUserName.json();
	};

	return (
		<form
			key={key}
			dialogTitle='Links'
			dialogContent='Add portfolio, github, linkedIn, or other links to go into your resume.'
			onSubmit={handleSubmit((data) => handleSave(data))}
		>
			<UserLinkInputs
				saveText={saveText}
				saveDisabled={!isValid}
				deleteOne={deleteOne}
				titleInput={
					<Controller
						control={control}
						name='title'
						rules={{
							required: true,
						}}
						render={({
							field: { onChange, onBlur, value, ref },
						}) => (
							<Input
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								inputRef={ref}
								type='text'
							/>
						)}
						defaultValue={defaultTitle}
					/>
				}
				hrefInput={
					<Controller
						control={control}
						name='href'
						rules={{
							required: true,
						}}
						render={({
							field: { onChange, onBlur, value, ref },
						}) => (
							<Input
								onChange={onChange}
								onBlur={onBlur}
								value={value}
								inputRef={ref}
								type='text'
							/>
						)}
						defaultValue={defaultHref}
					/>
				}
			/>
		</form>
	);
};

export default LinksForm;
