import React from 'react';
import {connect} from 'react-redux';
import PostListItem from "./PostListItem";
import selectPosts from '../selectors/posts';
import {startSetViewOnlyPosts} from "../actions/viewOnlyPosts";

export const PostList = (props) => {
    let posts, path;
    if (props.uid){
        if (props.viewOnlyPosts.uid !== props.uid){
            props.startSetViewOnlyPosts(props.uid);
        }
        posts = props.viewOnlyPosts.posts || [];
        path = `/users/${props.uid}/read/`;
    } else{
        posts = props.posts;
        path = '/edit/';
    }

    return (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Posts</div>
            <div className="show-for-desktop">Title</div>
            <div className="show-for-desktop">Created</div>
        </div>
        <div className="list-body">
            {
                posts.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Posts</span>
                    </div>
                ) : (
                    posts.map((post) => (
                        <PostListItem path={path} key={post.id} {...post}/>
                    ))
                )
            }
        </div>
    </div>
)};

const mapStateToProps = (state, props) => ({
    posts: selectPosts(state.posts, state.filters),
    uid: props.uid,
    viewOnlyPosts: state.viewOnlyPosts
});

const mapDispatchToProps = (dispatch) => ({
    startSetViewOnlyPosts: (uid) => dispatch(startSetViewOnlyPosts(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);