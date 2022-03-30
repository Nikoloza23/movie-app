import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import music from '../assets/Stranger Things _ Title Sequence [HD] _ Netflix.mp3';

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
`;
