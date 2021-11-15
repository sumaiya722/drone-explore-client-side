import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useContexts from '../../../Components/hooks/useContexts.js';

const PrivateRoute = ({ children, ...res }) => {
    const { authInfo, isLoading } = useContexts();
    if (isLoading) {
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <Route
            {...res}
            render={({ location }) => authInfo.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state:{from:location}
            }}
            ></Redirect>
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;