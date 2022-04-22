import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';

//navbar
function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	const state = useSelector((state) => state);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="container">
				<div className="left">
					<NavLink
						to="/main"
						className={(span) => (span.isActive ? 'span Active' : 'Deactive')}
						style={{ color: 'white' }}
					>
						<span>Homepage</span>
					</NavLink>
					<NavLink
						to="/movies"
						className={(span) => (span.isActive ? 'Active' : 'Deactive')}
						style={{ color: 'white' }}
					>
						<span> Movies</span>
					</NavLink>
					<NavLink
						to="/tvseries"
						className={(span) => (span.isActive ? 'Active' : 'Deactive')}
						style={{ color: 'white' }}
					>
						<span>Tv Series</span>
					</NavLink>
					<NavLink
						to="/favourties"
						className={(span) => (span.isActive ? 'Active' : 'Deactive')}
						style={{ color: 'white' }}
					>
						<span>Favourites List</span>
					</NavLink>
				</div>
				<div className="right">
					<NavLink
						to="/favourties"
						className={(span) => (span.isActive ? 'Active' : 'Deactive')}
						style={{ color: 'white' }}
					>
						<Notifications className="icon" style={{ color: 'white' }}></Notifications>
						<div className="added_item" style={{ color: 'white' }}>
							{state.length}
						</div>
					</NavLink>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
								<span>Go Back</span>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
