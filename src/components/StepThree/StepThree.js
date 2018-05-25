import React, { Component } from 'react';
import { connect } from 'react-redux';

class StepThree extends Component {

    render() {
        return (
            <div>
                <h3>StepThree</h3> 
            </div>
        );
    }
}

export default connect()(StepThree);