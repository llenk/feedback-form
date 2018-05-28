import React, { Component } from 'react';
import { Icon } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

// styles for star icons
const styles = {
    selected: {
        color: '#804B15',
    },
    unselected: {
        color: '#FFD5AA',
    }
};

class StarRating extends Component {
    starClass = (id) => {
        if (id <= this.props.rating) {
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
                    onClick={this.props.handleStarClick(num)}
                    >
                    grade
                </Icon>))}
            </div>
        )
    }
}

export default withStyles(styles)(StarRating);