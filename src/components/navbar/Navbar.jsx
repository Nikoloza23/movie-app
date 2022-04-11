import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const { pathname } = useLocation();

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	const Routes = [
		{
			path: '/',
		},
		{
			path: '/movies',
		},
		{
			path: '/tvseries',
		},
		{
			path: '/submited',
		},
	];

	const active = Routes.findIndex((el) => el.path === pathname);

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="container">
				<div className="left">
					<Link to="/main" style={{ textDecoration: 'none', color: 'white' }}>
						<span className={`${active ? 'span' : 'span'}`}>Homepage</span>
					</Link>
					<Link to="/movies" style={{ textDecoration: 'none', color: 'white' }}>
						<span className={active ? 'span' : 'span'}> Movies</span>
					</Link>
					<Link to="/tvseries" style={{ textDecoration: 'none', color: 'white' }}>
						<span className={active ? 'span' : 'span'}>Tv Series</span>
					</Link>
					<Link to="/submited" style={{ textDecoration: 'none', color: 'white' }}>
						<span className={active ? 'span' : 'span'}>Submited Applications</span>
					</Link>
				</div>
				<div className="right">
					<Notifications className="icon" />
					<img src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png" alt="" />
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
