import React from "react";
import {Link} from 'react-router-dom';
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";

const DashboardPage = () => (
    <div>
        <div className="content-container">
            <div className="big-button-container">
                <Link className="button button--big" to="/create">Create new post</Link>
            </div>
        </div>
        <PostListFilters/>
        <PostList/>
    </div>
);

export default DashboardPage;