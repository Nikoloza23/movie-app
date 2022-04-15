import './listItem.scss';
import { useState } from 'react';

//hover effect where you can see movie overview
const ListItem = ({ item, index }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div
			className="listItem"
			style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img className="hover_image" src={`${`https://image.tmdb.org/t/p/w1280` + item.poster_path}`} alt="" />

			{isHovered && (
				<div>
					<div className="itemInfo">
						<div className="itemInfoTop">
							<span>{item.release_date}</span>
							<span>{item.vote_average}</span>
							<span>{item.vote_count}</span>
							<span>{item.vote_average}</span>
							<span className="limit">{item.vote_count}</span>
							<span>{item.popularity}</span>
						</div>
						<div className="desc">{item.overview}</div>
						<div className="genre">{item.title}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ListItem;
