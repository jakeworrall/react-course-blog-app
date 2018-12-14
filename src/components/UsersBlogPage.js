import React from "react";
import { connect } from 'react-redux';
import PostList from "./PostList";
import PostListFilters from "./PostListFilters";
import ViewOnlyHeader from "../components/ViewOnlyHeader";

export const UsersBlogPage = (props) => {
    return (
    <div>
        <ViewOnlyHeader/>
        <PostListFilters viewOnly={true}/>
        <PostList uid={props.uid}/>
    </div>
)};

const mapStateToProps = (state, props) => ({
    uid: props.match.params.uid
});

export default connect(mapStateToProps)(UsersBlogPage);