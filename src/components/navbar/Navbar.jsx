import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Notifications, ArrowDropDown, PersonAddOutlined } from '@material-ui/icons';

import axios from 'axios';

import './navbar.scss';

//navbar
function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [apiData, setApiData] = useState([]);
	const state = useSelector((state) => state);

	useEffect(() => {
		axios.get(`https://62471cb24bd12c92f4fbfdc8.mockapi.io/movies`).then((result) => setApiData(result.data));
		console.log(apiData);
	}, [apiData]);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};

	console.log(apiData);
	return (
		<div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
			<div className="container">
				<div className="left">
					<NavLink
						to="/"
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
						<div className="added_item_nick">
							<NavLink to="/register" style={{ color: 'white' }}>
								<PersonAddOutlined className="profile_adder" />
							</NavLink>
							<div className="added_list">
								{apiData.slice(0, 1).map((res) => (
									<div className="added_items" key={res.id}>
										{res ? res.first_name : ''}
										<div className="added_lastName">{res ? res.last_name : ''}</div>
									</div>
								))}
							</div>
						</div>
						<Notifications className="icon" style={{ color: 'white' }}></Notifications>
						<div className="added_item" style={{ color: 'white' }}>
							{/* {state.cart.length} */}
						</div>
					</NavLink>
					<div className="profile">
						<ArrowDropDown className="icon" />

						<div className="options">
							<NavLink to="/register" style={{ textDecoration: 'none', color: 'white' }}>
								<span>Sign Up</span>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
