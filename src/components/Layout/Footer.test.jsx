import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';

describe('Footer', () => {
	it('tests the link is visible', () => {
		render(<Footer />);
		const linkElement = screen.getByRole('link', {name: 'allmaddesigns.com'});
		expect(linkElement).toBeInTheDocument();
	});
});
