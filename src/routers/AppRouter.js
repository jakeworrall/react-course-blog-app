import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import AddPostPage from "../components/AddPostPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import EditPostPage from "../components/EditPostPage";
import ReadPostPage from "../components/ReadPostPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <PrivateRoute path="/create" component={AddPostPage}/>
                <PrivateRoute path="/edit/:id" component={EditPostPage}/>
                <Route path="/read/:id" component={ReadPostPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;