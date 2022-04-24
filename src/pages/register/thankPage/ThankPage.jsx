import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmojiEmotionsOutlined } from '@material-ui/icons';
import './thankPage.scss';

const ThankPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/');
		}, 3000);
	}, [navigate]);
	return (
		<div className="thank">
			Thanks For Register
			<EmojiEmotionsOutlined className="emoji" />
		</div>
	);
};

export default ThankPage;
