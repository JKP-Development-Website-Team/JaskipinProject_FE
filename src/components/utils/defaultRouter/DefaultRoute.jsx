import React from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";

function DefaultRoute({isWrong, pathName ,pathTo})  {
    const navigate = useNavigate()
    
    console.log(isWrong)
    return isWrong === 'dashboard' ? <Navigate to={pathTo} /> : <Outlet />
}

export default DefaultRoute