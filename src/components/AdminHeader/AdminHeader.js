import React, { Component } from 'react';
import { Icon } from '@material-ui/core';

import './AdminHeader.css';


class AdminHeader extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>
                        <Icon>thumb_up</Icon>
                        Feedback Results!
                        <Icon>thumb_down</Icon>
                    </h1>
                </header>
            </div>
        );
    }
}

export default AdminHeader;