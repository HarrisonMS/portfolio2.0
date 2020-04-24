
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='headerContainer'>
			<Link className='headerTitle' to='/'>
				<p>Harrison Seaborn</p>
			</Link>
			<nav className='nav-link-cont'>
        <NavLink className='nav-link' to='/'>
				  Home
				</NavLink>
				<NavLink className='nav-link' to='/'>
					Projects
				</NavLink>
				<NavLink className='nav-link' to='/resume'>
					Resume
				</NavLink>
				<NavLink className='nav-link' to='/contact'>
					Contact
				</NavLink>
			</nav>

		</div>
	);
};

export default Header;