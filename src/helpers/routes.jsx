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
// export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
//     return (
//         <Route
//             {...restProps}
//             render={() => {
//                 if (!user) {
//                     return children;
//                 }
                
//                 if (user) {
//                     return (
//                         <Navigate
//                             to={{
//                                 pathname: loggedInPath,
//                             }}
//                         />
//                     );
//                 }
            
//             return null;
//         }}
//         />
//     )
// }

// {...restProps}
// render={({ location }) => {
//     if (user) {
//         return children;
//     }
    
//     if (!user) {
//         return (
//             <Navigate
//                 to={{
//                     pathname: 'signin',
//                     state: { from: location },
//                 }}
//             />
//         );
//     }
    
//     return null;
// }}