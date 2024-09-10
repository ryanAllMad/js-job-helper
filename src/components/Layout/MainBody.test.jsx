import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainBody from './MainBody';

describe('MainBody', () => {
	it('tests MainBody Loads as expected', () => {
		render(
			<MemoryRouter>
				<MainBody>
					<div>I'm a child</div>
				</MainBody>
			</MemoryRouter>
		);
		const textElement = screen.getByText('I\'m a child');
		const mainEl = screen.getByRole('main')
		expect(textElement).toBeInTheDocument()
		expect(mainEl).toBeInTheDocument()
	});
});