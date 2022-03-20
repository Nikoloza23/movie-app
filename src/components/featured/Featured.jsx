import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

export default function Featured({ type }) {
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === 'movie' ? 'Movies' : 'Series'}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img src="https://miro.medium.com/max/1400/1*5lyavS59mazOFnb55Z6znQ.png" alt="" />
			<div className="info">
				<img
					src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
					alt=""
				/>
				<span className="desc">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate obcaecati temporibus maiores
					sequi laudantium non quos accusamus libero ipsum! Officia tenetur doloremque voluptatibus expedita
					ipsum perferendis? Delectus amet repellendus veritatis?
				</span>
				<div className="buttons">
					<button className="play">
						<PlayArrow />
						<span>Play</span>
					</button>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	);
}
