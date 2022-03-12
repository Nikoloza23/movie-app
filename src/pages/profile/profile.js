import classNames from 'classnames';
/*  import { withAuthProtected } from '../../components/hoc/withAuthProtected'; */
/* if you default like this withAuthProtected(Profile) you wiil take warn*/
import css from './profile.module.css';

function Profile(props) {
	return (
		<div className={classNames('row mt-3 p-3', css.profile)}>
			<h2 className={classNames(css.title)}>{props.title}</h2>
		</div>
	);
}

export default Profile;
