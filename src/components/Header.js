import {Link} from "react-router-dom";
import React from "react";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";
import EnterNameModal from "./EnterNameModal";

export const Header = ({ startLogout, name }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    {name && <h1>{name}'s Blog</h1>}
                </Link>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
        {!name && <EnterNameModal/>}
    </header>
);

const mapStateToProps = (state) => {
    return {
        name: state.auth.username
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);