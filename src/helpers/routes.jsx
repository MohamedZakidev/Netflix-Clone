import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

export function AuthRequired({ user, children, ...restProps }) {
    if(!user) {
        return (
            <Navigate
                to={ROUTES.SIGN_IN}
                {...restProps}
            />
        )
    }
    
    return <Outlet />
}

export function UserRedirect({ user, children, ...restProps }) {
    if(user) {
        return <Navigate to={ROUTES.BROWSE} />
    }

    return <Outlet />
}
