import { useRef, useState } from 'react';
import music from '../../assets/C H I L L V I B E S _ Chill & aesthetic music playlist.mp3';

import styled, { keyframes } from 'styled-components';
const SoundBar = () => {
	const ref = useRef(null);
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);

		if (!click) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	};
	return (
		<Box onClick={() => handleClick()}>
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />
			<Line click={click} />

			<audio src={music} ref={ref} loop />
		</Box>
	);
};

export default SoundBar;

const Box = styled.div`
	display: flex;
	cursor: pointer;
	position: fixed;
	z-index: 10;
	top: 1.5rem;
	left: 3rem;
`;

const play = keyframes`
0%{
    transform: scaleY(1)
}
50%{
    transform: scaleY(2)
}
100%{
    transform: scaleY(1)
}
`;

const Line = styled.span`
	background: ${(props) => props.theme.text};
	border: 1px solid ${(props) => props.theme.text};

	animation: ${play} 1s ease infinite;
	animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
	height: 1rem;
	width: 2px;
	margin: 0 0.1rem;
	color: whiteSmoke;
	background: black;

	&:nth-child(1) {
		animation-delay: 0.2s;
	}

	&:nth-child(2) {
		animation-delay: 0.3s;
	}

	&:nth-child(3) {
		animation-delay: 0.4s;
	}

	&:nth-child(4) {
		animation-delay: 0.5s;
	}

	&:nth-child(5) {
		animation-delay: 0.8s;
	}
`;


