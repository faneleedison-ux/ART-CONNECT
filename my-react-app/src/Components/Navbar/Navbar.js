import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			HOME
		</NavLink>
        <NavLink to='/play' activeStyle>
			PLAY
		</NavLink>
		<NavLink to='/create' activeStyle>
			CREATE
		</NavLink>
		<NavLink to='/hire' activeStyle>
			HIRE
		</NavLink>
        <NavLink to='/news' activeStyle>
            NEWS
		</NavLink>
		<NavLink to='/about' activeStyle>
			ABOUT
		</NavLink>
		<NavLink to='/contact' activeStyle>
			CONTACT
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
