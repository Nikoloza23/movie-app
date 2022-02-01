import classNames from 'classnames';
import { withAuthProtected } from '../../components/hoc';
import css from './profile.module.css'

function Profile (props){
   return(
       <div className={classNames('row mt-3 p-3', css.profile)}>
           <h2 className={classNames(css.title)}>{props.title}</h2>
       </div>
   )
}



export default withAuthProtected(Profile);