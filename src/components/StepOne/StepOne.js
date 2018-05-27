import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardContent, TextField, CardActions, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import StepHeader from '../StepHeader/StepHeader';

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
    },
  };

class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            feeling: '',
            nextPage: '/2',
        };
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
        });
    };

    nextPage = (event) => {
        const action = { type: 'STEP', payload: { feeling: this.state.feeling } };
        this.props.dispatch(action);
        this.props.history.push(this.state.nextPage);
    }

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
                        <Card className="card">
                            <CardContent>
                                <p>
                                    How are you feeling today?
                                </p>
                                <TextField
                                    id="feeling"
                                    onChange={this.handleChange}
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
            </div>
        );
    }
}

export default connect()(withStyles(styles)(StepOne));