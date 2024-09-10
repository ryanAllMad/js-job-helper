import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
	it('tests the nav links are visible', () => {
		render(<MemoryRouter><Header /></MemoryRouter>);
		const userElement = screen.getByRole('link', { name: 'User Info' });
		const jobElement = screen.getByRole('link', { name: 'Add a Job' });
		const qualElement = screen.getByRole('link', { name: 'Update Qualifications' });
		const resumeElement = screen.getByRole('link', { name: 'Search Resume' });
		expect(userElement).toBeInTheDocument()
		expect(jobElement).toBeInTheDocument()
		expect(qualElement).toBeInTheDocument()
		expect(resumeElement).toBeInTheDocument()
	});
});