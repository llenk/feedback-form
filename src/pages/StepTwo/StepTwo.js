import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardContent, TextField, CardActions, Button, Grid } from '@material-ui/core';

import StepHeader from '../../components/StepHeader/StepHeader';

class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            feeling: '',
            nextPage: '/3',
        };
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    };

    nextPage = (event) => {
        const action = { type: 'STEP', payload: { understanding: this.state.understanding } };
        this.props.dispatch(action);
        this.props.history.push(this.state.nextPage);
    }

    render() {
        return (
            <div>
                <StepHeader />
                <Grid container
                    alignItems="flex-end"
                    justify="center"
                    display="flex">
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6} margin="100px">
                        <Card className="card">
                            <CardContent>
                                <p>
                                    How well are you understanding the content?
                                </p>
                                <TextField
                                    id="understanding"
                                    onChange={this.handleChange}
                                />
                            </CardContent>
                            <CardActions>
                                <Button 
                                    onClick={this.nextPage}>
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

export default connect()(StepTwo);