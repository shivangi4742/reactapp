import './app.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
import { useDispatch } from 'redux-react-hook';
import { fetchCalls } from './views/dp-details/details/details.actions';
import { useEffect } from 'react';
// import CallHistory from './views/DPDetails/Details/CallsHistory';
import Home from './views/Home/home';
import Loading from './components/loading';
import Navbar from './components/navbar/navbar';
import routes from './routes';
import RouteWithSubRoutes from './components/route-with-subroutes';

const App = () => {
    const dispatch = useDispatch();

    // Used here to test epics
    useEffect(() => {
        // dispatch(addCall(['Sample remark1']));
        dispatch(fetchCalls());
    })



    return (
        <Router>
            <div>
                {/*  <Navbar /> */}
                {/*
                    Reach Router Simplicity

                    <Home path="/" />
                    <AsyncDPList path="dplist">
                        <AsyncDPDetails path=":id" />
                    </AsyncDPList> */
                }
                <Switch>
                    {routes.map((route, idx) => <RouteWithSubRoutes key={idx} {...route} />)}
                    {/* <Route component={NotFound} />  */}
                    {/* <Route exact path='/' component={Home} />
                    <Route path='/dplist' component={AsyncDPList} />
                    */}
                </Switch>

            </div>
        </Router>
    )
}

export default App;