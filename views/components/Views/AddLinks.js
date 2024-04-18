import * as React from 'react';
import { Input } from '@mui/material';
import EmptyMainDialogBG from '../Layout/EmptyMainDialogBG.js';
import BasicDialog from '../Blocks/BasicDialog.js';
import UserLinkInputs from '../Blocks/UserLinkInputs.js';
import { useForm, Controller } from 'react-hook-form';


export default function AddLinks() {

	const { handleSubmit, control } = useForm();

	const handleSave = async (data) => {
		const postUserName = await fetch('http://localhost:3000/api/links', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: data.title,
				href: data.href
			}),
		});
		return postUserName.json();
	};

	return (
		<>
			<EmptyMainDialogBG>
				<BasicDialog
					dialogTitle='Links'
					dialogContent='Add portfolio, github, linkedIn, or other links to go into your resume.'
					submitFormFunc={handleSubmit((data) => handleSave(data))}
				>
					{' '}
					<UserLinkInputs
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
							/>
						}
						hrefInput={<Controller
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
						/>}
					/>
				</BasicDialog>
			</EmptyMainDialogBG>
		</>
	);
}
