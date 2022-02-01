import { NavLink } from 'react-router-dom';

/* With this feature I split the data 
into pages so you can go over and over again */
function Navigation(props){
    return(
        <div className="row mt-5 mb-3">
         <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" >
              Home Page
            </NavLink>
        </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/notes" >
              Notes Page
            </NavLink>
        </li>
            <li className="nav-item">
            <NavLink className='nav-link' to="/counter" >
              Class Counter
            </NavLink>
        </li>
            <li className="nav-item">
            <NavLink className='nav-link' to="/profile" >
              Profile
            </NavLink>
        </li>
            </ul>
        </div>
    )
};



export default Navigation;