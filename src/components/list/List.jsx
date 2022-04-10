import { useRef, useState } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import ListItem from '../listItem/ListItem';
import './list.scss';

export default function List({ data, keyword }) {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSliderNumber] = useState(0);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;
		if (direction === 'left' && slideNumber > 0) {
			setSliderNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === 'right' && slideNumber < 5) {
			setSliderNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};

	if (data.length === 0) {
		return <h2>Loading....</h2>;
	} else
		return (
			<div className="list">
				<div className="wrapper">
					<ArrowBackIosOutlined
						className="slideArrow left"
						onClick={() => handleClick('left')}
						style={{ display: !isMoved && 'none' }}
					/>
					<div className="container" ref={listRef}>
						{data.map((item, i) => {
							return (
								<Link to={`/detail/${item.id}/${keyword}`} key={i}>
									<ListItem item={item} index={i} />
								</Link>
							);
						})}
					</div>
					<ArrowForwardIosOutlined className="slideArrow right" onClick={() => handleClick('right')} />
				</div>
			</div>
		);
}
