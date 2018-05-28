import React, { Component } from 'react';
import { connect } from 'react-redux';

import StarRating from '../StarRating/StarRating';

import { Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    button: {
        backgroundColor: '#7B84AE',
        borderColor: '#515E91',
        '&:hover': {
            backgroundColor: '#515E91',
            borderColor: '#303C74',
        },
        position: 'relative',
        left: 'calc(100% - 96px)',
    }, // styles for the button
};

class NumberForm extends Component {
    constructor() {
        super();
        this.state = {
            question: 0,
        };
    }

    // changes state when a star is clicked
    handleStarClick = (num) => (event) => {
        this.setState({
            question: num,
        });
    };

    // if a valid response (1-5) is selected, goes to next page
    // I tried to get a dialog box to show, but it wouldn't
    // so now it just doesn't do anything when there's no valid response
    nextPage = (event) => {
        if (this.state.question < 1 || this.state.question > 5) {
            
        }
        else {
            const action = { type: 'STEP', payload: { [this.props.question]: this.state.question } };
            this.props.dispatch(action);
            this.props.history.push(this.props.nextPage);
        }
    }

    render(props) {
        return (
                <Grid container
                    alignItems="flex-end"
                    justify="center"
                    display="flex">
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={8} sm={6} md={4} margin="100px">
                        {/* alters box size for screen sizes */}
                        <Card className="card">
                            <CardContent>
                                <p>
                                    {this.props.questionText}
                                </p>
                                <StarRating
                                    handleStarClick={this.handleStarClick}
                                    rating={this.state.question}
                                />
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={this.nextPage}
                                    className={this.props.classes.button}>
                                    NEXT
                        </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
        )
    }
}



export default connect()(withStyles(styles)(NumberForm));