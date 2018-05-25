import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepOne extends Component {

    render() {
        return (
            <div>
                <h3>StepOne</h3> 
            </div>
        );
    }
}

export default connect()(StepOne);