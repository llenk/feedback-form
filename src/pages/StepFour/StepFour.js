import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepFour extends Component {

    render() {
        return (
            <div>
                <h3>StepFour</h3> 
            </div>
        );
    }
}

export default connect()(StepFour);