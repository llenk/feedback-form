import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepTwo extends Component {

    render() {
        return (
            <div>
                <h3>StepTwo</h3> 
            </div>
        );
    }
}

export default connect()(StepTwo);