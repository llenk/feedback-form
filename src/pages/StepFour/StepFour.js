import React, { Component } from 'react';
import { connect } from 'react-redux';

import StepHeader from '../../components/StepHeader/StepHeader';

import { Card, CardContent, TextField, CardActions, Button, Grid } from '@material-ui/core';
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

class StepFour extends Component {
    constructor() {
        super();
        this.state = {
            comments: '',
            questionText: 'Any comments you want to leave?',
            nextPage: '/5',
        };
    }
    
    handleChange = (event) => { // changes local state while user is still typing
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    nextPage = (event) => {
        const action = { type: 'STEP', payload: { comments: this.state.comments } };
        this.props.dispatch(action);
        this.props.dispatch({type: 'SUBMIT_FEEDBACK'});
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
                                {this.state.questionText}
                            </p>
                            <TextField
                                name="question"
                                onChange={this.handleChange}
                            />
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={this.nextPage}
                                className={this.props.classes.button}>
                                SUBMIT
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

export default connect()(withStyles(styles)(StepFour));
