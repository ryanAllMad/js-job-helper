import * as React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<li><NavLink to="/">Search Responses</NavLink></li>
				<li><NavLink to="/company">Search Company's</NavLink></li>
				<li><NavLink to="/enter-requirements">Enter Requirements</NavLink></li>
				<li><NavLink to="/enter-responses">Enter Responses</NavLink></li>
			</nav>
		</header>
	)
}

export default Header