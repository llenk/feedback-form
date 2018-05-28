import React, { Component } from 'react';
import { Icon } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import './StarRating.css';

// styles for star icons
const styles = {
    selected: {
        color: '#FFD5AA',
    },
    unselected: {
        color: '#804B15',
    }
};

class StarRating extends Component {
    starClass = (id) => {
        if (id > this.props.rating) {
            // applies 'selected' styles from above
            return 'StarRating-selected-128';
        }
        else {
            // applies 'unselected' styles from above
            return 'StarRating-unselected-129';
        }
    }
    oneToFive = [1, 2, 3, 4, 5];
    render() {
        return (
            <div>
                {this.oneToFive.map(num => (<Icon 
                    key={num}
                    className={this.starClass(num)}
                    >
                    grade
                </Icon>))}
            </div>
        )
    }
}

export default withStyles(styles)(StarRating);