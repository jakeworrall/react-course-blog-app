import {Link} from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import EnterNameModal from "./EnterNameModal";

export const ViewOnlyHeader = ({ uid, name }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to={`/users/${uid}`}>
                    <h1>{name ? name : 'Anonymous'}'s Blog</h1>
                </Link>
                <Link className="button button--link" to="/dashboard">My Dashboard</Link>
            </div>
        </div>
        {!name && <EnterNameModal/>}
    </header>
);

const mapStateToProps = (state) => ({
    uid: state.viewOnlyPosts.uid,
    name: state.viewOnlyPosts.username
});

export default connect(mapStateToProps)(ViewOnlyHeader);