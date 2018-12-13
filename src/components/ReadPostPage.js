import React from "react";
import connect from "react-redux/es/connect/connect";

export const ReadPostPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">{props.post.title}</h1>
            </div>
        </div>
        <div className="content-container">
            <p>{props.post.content}</p>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

export default connect(mapStateToProps)(ReadPostPage);