import React, { Component } from 'react';
import { Icon } from '@material-ui/core';

import './StepHeader.css';


class StepHeader extends Component {

    render() {
        return (
            <div>
                <header>
                    <h1>
                        <Icon>thumb_up</Icon>
                        Feedback!
                        <Icon>thumb_down</Icon>
                    </h1>
                </header>
            </div>
        );
    }
}

export default StepHeader;