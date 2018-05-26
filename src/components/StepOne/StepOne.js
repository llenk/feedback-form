import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';

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
        const action = {type: 'STEP', payload: {feeling: this.state.feeling}};
        this.props.dispatch(action);
        this.props.history.push(this.state.nextPage);
    }

    render() {
        return (
            <div>
                <Card>
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
                        <Button onClick={this.nextPage}>
                            Next
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect()(StepOne);