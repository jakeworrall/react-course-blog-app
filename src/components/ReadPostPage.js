import React from "react";
import connect from "react-redux/es/connect/connect";
import NotFoundPage from "../components/NotFoundPage";
import {startSetViewOnlyPosts} from "../actions/viewOnlyPosts";
import {Link} from "react-router-dom";
import ViewOnlyHeader from "../components/ViewOnlyHeader";

export const ReadPostPage = (props) => {
    if (props.viewOnlyPosts.uid !== props.uid){
        props.startSetViewOnlyPosts(props.uid);
    }

    let post, content;

    if (props.viewOnlyPosts.posts){
        post = props.viewOnlyPosts.posts.find((post) => post.id === props.postId);
        if (post){
            content = post.content.split('\n\n');
        } else {
            return <NotFoundPage/>
        }
    }

    const to = `/users/${props.uid}`;

    return (
    <div>
        <ViewOnlyHeader/>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">{post && post.title}</h1>
            </div>
        </div>
        <div className="content-container">
            {post && content.map((line, index) => (<p key={index}>{line}</p>))}
        </div>
    </div>
)};

const mapStateToProps = (state, props) => ({
    postId: props.match.params.id,
    uid: props.match.params.uid,
    viewOnlyPosts: state.viewOnlyPosts
});

const mapDispatchToProps = (dispatch) => ({
    startSetViewOnlyPosts: (uid) => dispatch(startSetViewOnlyPosts(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadPostPage);