import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './submited.css';

function Submited() {
	const [apiData, setApiData] = useState([]);
	const [clickedData, setClickedData] = useState(null);

	useEffect(() => {
		axios
			.get(`https://62471cb24bd12c92f4fbfdc8.mockapi.io/movies`)
			.then((rep) => console.log(setApiData(rep.data)))
			.catch((error) => console.log('error has occured'));
	}, []);

	const clickedOnDataTitle = (num) => {
		setClickedData((prev) => (prev === num ? null : num));
	};

	return (
		<div className="submited_container">
			<h1 className="submited_title">Submited Applications</h1>
			{apiData &&
				apiData.slice(0, 20).map((el, index) => {
					return (
						<div key={Math.random()}>
							<button className="submited_selected" onClick={() => clickedOnDataTitle(index)}>
								{index + 1}
							</button>
							<div
								className="submited_applications"
								style={clickedData === index ? {} : { display: 'none' }}
							>
								<div className="submited_list">
									<b className="submited_b">First Name</b>
									<p className="submited_choosen">{el.first_name ? el.first_name : ''}</p>
									<b className="submited_b">Lasta Name</b>
									<p className="submited_choosen">{el.last_name ? el.last_name : ''}</p>
									<b className="submited_b">Email</b>
									<p className="submited_choosen">{el.email ? el.email : ''}</p>
								</div>
							</div>
						</div>
					);
				})}
			<Link to="/main" style={{ textDecoration: 'none' }}>
				<div className="submited_back">GO BACK</div>
			</Link>
		</div>
	);
}

export default Submited;
