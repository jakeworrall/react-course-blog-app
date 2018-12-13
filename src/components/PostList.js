import React from 'react';
import {connect} from 'react-redux';
import PostListItem from "./PostListItem";
import selectPosts from '../selectors/posts';

export const PostList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Posts</div>
            <div className="show-for-desktop">Title</div>
            <div className="show-for-desktop">Created</div>
        </div>
        <div className="list-body">
            {
                props.posts.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Posts</span>
                    </div>
                ) : (
                    props.posts.map((post) => (
                        <PostListItem key={post.id} {...post}/>
                    ))
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    posts: selectPosts(state.posts, state.filters)
});

export default connect(mapStateToProps)(PostList);