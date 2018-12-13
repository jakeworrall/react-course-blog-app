import React from "react";
import {connect} from 'react-redux';
import PostForm from './PostForm';
import {startEditPost, startRemovePost} from "../actions/posts";
import ConfirmRemoveModal from "../components/ConfirmRemoveModal";
import {Link} from "react-router-dom";
import moment from "moment";

export class EditPostPage extends React.Component {
    state = {
        isModalOpen: false
    };

    openModal = () => {
        this.setState(() => ({ isModalOpen: true }));
    };

    closeModal = () => {
        this.setState(() => ({ isModalOpen: false }));
    };

    onSubmit = (post) => {
        this.props.startEditPost(this.props.post.id, post);
        this.props.history.push('/');
    };

    removePost = () => {
        this.props.startRemovePost({ id: this.props.post.id });
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Post</h1>
                    </div>
                </div>
                <div className="content-container">
                    <p className="form__link">
                        Readable link:{' '}
                        <Link to={`/read/${this.props.post.id}`}>
                            localhost:8080/read/{this.props.post.id}
                        </Link>
                    </p>
                    <p className="form__link">
                        Last edited: {moment(this.props.post.lastEditedAt).format('MMMM Do, YYYY')} at {moment(this.props.post.lastEditedAt).format('HH:mm')}
                    </p>
                    <PostForm
                        post={this.props.post}
                        onSubmit={this.onSubmit}
                    />
                    <div className="remove-button">
                        <button
                            className="button button--secondary"
                            onClick={this.openModal}
                        >
                            Remove Post
                        </button>
                    </div>
                </div>
                <ConfirmRemoveModal
                    removePost={this.removePost}
                    isOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditPost: (id, post) => dispatch(startEditPost(id, post)),
    startRemovePost: (data) => dispatch(startRemovePost(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);