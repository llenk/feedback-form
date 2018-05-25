import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    render() {
        return (
            <div>
                <h3>Admin</h3> 
            </div>
        );
    }
}

export default connect()(Admin);