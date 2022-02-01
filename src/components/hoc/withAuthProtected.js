import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export const withAuthProtected = (Component) => {
    const WithAuthProtected = (props) => { 
       useEffect(() => {
          console.warn('accessing secured page');
          
       }, []);

       const token = JSON.parse(localStorage.getItem('auth.token'));
       if(!token) return <Navigate  to='/' />

        return <Component {...props} />
    };
    return WithAuthProtected
};
