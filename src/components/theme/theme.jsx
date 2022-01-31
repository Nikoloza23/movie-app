import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types"
import classNames from 'classnames'

import css from "./theme.module.css";

function Theme({children, mode = "bg-light"}) {
   const { pathname } = useLocation();
   const [themeMode, setThemMode] = useState(mode);
   
   useEffect(() => {
       let theme = 'bg-light';
         if(pathname === '/'){
           theme = css.bgHome;
       }
       else if ( pathname === '/notes'){
        theme = css.bgNotes;
       }
       else if ( pathname === '/counter'){
           theme = css.bgCounter;
       }
       setThemMode(theme);
   }, [pathname])

    return (
        <div className={classNames('p-3', themeMode)}>{children}</div>
    )
};

Theme.protoTypes = {
    mode: PropTypes.oneOf(['classCounter','homePage','notesPage'])
}

export default Theme;