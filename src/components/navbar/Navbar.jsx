import { useState } from 'react';

import { Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';

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
					<span>Homepage</span>
					<span> Movies</span>
					<span>Tv Series</span>
					<span>Submited Applications</span>
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
