import { Link } from 'react-router-dom';

import StarfieldAnimation from 'react-starfield-animation';

import './start.css';

//Here ara simple animations and start page
//where you will throwd on main page
function Start() {
	return (
		<section className="startet_section">
			<StarfieldAnimation
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			/>
			<div className="starter_title">Let's Start</div>
			<Link to="/main">
				<div className="loader">
					<span style={{ '--i': '1' }}></span>
					<span style={{ '--i': '2' }}></span>
					<span style={{ '--i': '3' }}></span>
					<span style={{ '--i': '4' }}></span>
					<span style={{ '--i': '5' }}></span>
					<span style={{ '--i': '6' }}></span>
					<span style={{ '--i': '7' }}></span>
					<span style={{ '--i': '8' }}></span>
					<span style={{ '--i': '9' }}></span>
					<span style={{ '--i': '10' }}></span>
					<span style={{ '--i': '11' }}></span>
					<span style={{ '--i': '12' }}></span>
					<span style={{ '--i': '13' }}></span>
					<span style={{ '--i': '14' }}></span>
					<span style={{ '--i': '15' }}></span>
					<span style={{ '--i': '16' }}></span>
					<span style={{ '--i': '17' }}></span>
					<span style={{ '--i': '18' }}></span>
					<span style={{ '--i': '19' }}></span>
					<span style={{ '--i': '20' }}></span>
				</div>
			</Link>
		</section>
	);
}

export default Start;
