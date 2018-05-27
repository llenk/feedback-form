import React, { Component } from 'react';
import { connect } from 'react-redux';

import StepHeader from '../../components/StepHeader/StepHeader';

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
        left: 'calc(100% - 149px)',
    }, // styles for the button
};

class StepFive extends Component {
    constructor() {
        super();
        this.state = {
            nextPage: '/',
        };
    }

    nextPage = (event) => {
        this.props.history.push(this.state.nextPage);
    } // on click of button, sends payload to redux, and sends to next page

    render(props) {
        return (
            <div>
            <StepHeader />
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
                                Thank You!
                            </p>
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={this.nextPage}
                                className={this.props.classes.button}>
                                New Feedback
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default connect()(withStyles(styles)(StepFive));
