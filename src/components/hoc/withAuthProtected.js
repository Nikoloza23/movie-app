import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


/*this is funqtion about warn if you chnage this token
you can not go to profile page and stay alone on homepage*/
export const withAuthProtected = (Component) => {
    const WithAuthProtected = (props) => { 
       useEffect(() => {
          console.warn('accessing secured page');
          
       }, []);

       const token = JSON.parse(localStorage.getItem('auth.token'));
       if(!token) return <Navigate  to='/' />

        return (
        <Component {...props} />
        )
    };
    return WithAuthProtected
};
