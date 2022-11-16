import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    let location=useLocation()
    if(loading)  return <progress className="progress w-56"></progress>
    if(user){
        return children
    }
    return  <Navigate  to={'/login'}  state={{from:location}}  replace ></Navigate>
};

export default PrivateRoute;