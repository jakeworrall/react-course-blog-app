import React from 'react';
import Modal from 'react-modal';

const ConfirmRemoveModal = (props) => (
    <div>
        {Modal.setAppElement('body')}
        <Modal
            isOpen={props.isOpen}
            contentLabel="Confirm Remove"
            onRequestClose={props.closeModal}
            closeTimeoutMS={200}
            className="modal"
            ariaHideApp={true}
        >
            <h3 className="modal__title">Are you sure you want to remove this post?</h3>
            <div className="button-container">
                <button className="button button--modal" onClick={props.removePost}>Yes</button>
                <button className="button button--modal" onClick={props.closeModal}>No</button>
            </div>
        </Modal>
    </div>
);

export default ConfirmRemoveModal;