import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardContent, TextField, CardActions, Button } from '@material-ui/core';

class StepOne extends Component {
    constructor() {
        super();
        this.state = {
            understanding: '',
            nextPage: '/3',
        };
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
        });
    };

    nextPage = (event) => {
        const action = {type: 'STEP', payload: {understanding: this.state.understanding}};
        this.props.dispatch(action);
        this.props.history.push(this.state.nextPage);
    }

    render() {
        return (
            <div>
                <Card>
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