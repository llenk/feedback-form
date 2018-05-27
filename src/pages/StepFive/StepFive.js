import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepFive extends Component {

    render() {
        return (
            <div>
                <h3>StepFive</h3> 
            </div>
        );
    }
}

export default connect()(StepFive);