import React, { Component, Fragment } from 'react';

class LoginJumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>

                            </div>
                            <div className='col-md-6'>
                                <form>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginJumbotron;