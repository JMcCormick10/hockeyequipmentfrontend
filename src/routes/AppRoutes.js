import React from "react";
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Home from '../containers/Home/Home';
import SearchResults from "containers/SearchResults/SearchResults";

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path="/equipment/:id" component={Equipment} exact/>
            <Route path="/equipment" component={EquipmentResults} exact/>
            <Route path="/registration" component={Registration} exact/>
            <Route path="/login" component={Login} exact/> */}
            <Route path="/search-results" component={SearchResults} exact/>
            <Route path="/" component={Home} exact/>
        </Switch>
    </BrowserRouter>
);

export default AppRoutes;