import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';

//navbar
function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="container">
				<div className="left">
					<Link to="/main" style={{ textDecoration: 'none', color: 'white' }}>
						<span>Homepage</span>
					</Link>
					<Link to="/movies" style={{ textDecoration: 'none', color: 'white' }}>
						<span> Movies</span>
					</Link>
					<Link to="/tvseries" style={{ textDecoration: 'none', color: 'white' }}>
						<span>Tv Series</span>
					</Link>
					<Link to="/submited" style={{ textDecoration: 'none', color: 'white' }}>
						<span>Submited Applications</span>
					</Link>
				</div>
				<div className="right">
					<Notifications className="icon" />
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
