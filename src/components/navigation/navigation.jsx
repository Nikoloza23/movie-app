import PropTypes from 'prop-types';

/* With this feature I split the data 
into pages so you can go over and over again */
function Navigation({page, setPage}){
    return(
        <div className="row mt-5 mb-3">
         <ul className="nav nav-pills">
            <li className="nav-item">
            <button 
            className={`nav-link ${page === "homePage" ? "active" : ""}`}
            onClick={() => setPage("homePage")}
            >
            Home Page
            </button>
            </li>
            <li className="nav-item">
            <button 
            className={`nav-link ${page === 'notesPage' ? 'active' : ""}`}
            onClick={() => setPage('notesPage')}
            >
            Notes Page
            </button>
            </li>
            <li className="nav-item">
            <button 
            className={`nav-link ${page === 'classCounter' ? 'active' : ""}`}
            onClick={() => setPage('classCounter')}
            >
            Class Counter
            </button>
            </li>
            </ul>
        </div>
    )
};

Navigation.propTypes = {
   page: PropTypes.string.isRequired,
   setPage: PropTypes.func.isRequired
}

export default Navigation;