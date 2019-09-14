import React from 'react';
import { Route } from 'react-router';

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} render={(props) => <route.component routes={route.routes} {...props} />} />
    )
}
export default RouteWithSubRoutes;