import React, { Fragment } from 'react';

const LoginModal = (props) => (
    <Fragment>
        <div className='modal fade' id='loginModal' tabIndex='-1' role='dialog'>
            <div className='modal-dialog modal-dialog-centered' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='loginModalTitle'>{props.modalName}</h5>
                        <button type='button' className='close' data-dismiss='modal'>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        {props.children}
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-outline-dark' data-dismiss='modal'>Close</button>
                        <button type='submit' className='btn btn-outline-dark' data-dismiss='modal'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default LoginModal;