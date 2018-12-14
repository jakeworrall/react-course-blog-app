import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import {startSetUsername} from "../actions/auth";

export class EnterNameModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            error: ''
        };
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({value}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.value !== ''){
            console.log('val:' + this.state.value);
            console.log('uid:' + this.props.uid);
            this.props.startSetUsername(this.props.uid, this.state.value);
        }
    };

    render() {
        return (
            <div>
                {Modal.setAppElement('body')}
                <Modal
                    isOpen={true}
                    contentLabel="Confirm Remove"
                    closeTimeoutMS={200}
                    className="modal"
                    ariaHideApp={true}
                >
                    <h3 className="modal__title">Please enter a display name:</h3>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" value={this.state.value} onChange={this.onValueChange}/>
                        <button className="button">Enter</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
    startSetUsername: (uid, username) => dispatch(startSetUsername(uid, username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnterNameModal);