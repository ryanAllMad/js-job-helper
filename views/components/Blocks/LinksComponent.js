import * as React from 'react';
import { Input, Typography } from '@mui/material';
import UserLinkInputs from './UserLinkInputs.js';
import { useForm, Controller } from 'react-hook-form';

export default function LinksComponent(props) {
	const { handleSubmit, control } = useForm();
	const { key, fetchUrl, defaultTitle, defaultHref, deleteOne } = props

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
		return postUserName.json();
	};

	return (
		<>
			<Typography variant='body2'>Add Link</Typography>
			<form
				key={key}
				dialogTitle='Links'
				dialogContent='Add portfolio, github, linkedIn, or other links to go into your resume.'
				onSubmit={handleSubmit((data) => handleSave(data))}
			>
				<UserLinkInputs
					deleteOne={deleteOne}
					titleInput={
						<Controller
							control={control}
							name='title'
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
		</>
	);
}
