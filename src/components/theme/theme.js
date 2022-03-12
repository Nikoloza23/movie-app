import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './theme.module.css';

//take color from theme.css.modules
function Theme({ children, mode = 'bg-light' }) {
	const { pathname } = useLocation();
	const [themeMode, setThemMode] = useState(mode);

	useEffect(() => {
		let theme = 'bg-light';
		switch (pathname) {
			case '/notes':
				theme = css.bgNotes;
				break;
			case '/counter':
				theme = css.bgCounter;
				break;
			case '/profile':
				theme = css.bgProfile;
				break;
			default:
				theme = css.bgHome;
		}
		setThemMode(theme);
	}, [pathname]);

	return <div className={classNames('p-3', themeMode)}>{children}</div>;
}

Theme.protoTypes = {
	mode: PropTypes.oneOf(['classCounter', 'homePage', 'notesPage']),
};

export default Theme;
