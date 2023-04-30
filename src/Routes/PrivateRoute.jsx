import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)

    const location = useLocation()
    console.log(location);
if(loader){
    return <> <Spinner animation="border" variant="success" /></>
}

    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

/* 
*---------------
steps------
1. cheal user is logged in
2. if user is logged in  allow then to visit the route
3.else move to login page
4.setup the private router
5.handle loading
*/