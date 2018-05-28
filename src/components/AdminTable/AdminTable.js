import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell, Icon } from '@material-ui/core';

class AdminTable extends Component {
    constructor() {
        super();
        this.state = {
            feedback: [],
        };
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/api/feedback')
        .then(response => {
            this.setState({
                feedback: response.data,
            });
        }).catch(error => console.log('whoops'));
    }

    handleFlagToggle = (fb) => (event) => {
        axios({
            method: 'PUT',
            url: '/api/feedback',
            data: fb,
        }).then(response => {
            this.getFeedback();
        }).catch(error => console.log('whoops'));
    };

    render(props) {
        return (
            <Grid container
                alignItems="flex-end"
                justify="center"
                display="flex">
                <Grid item xs>
                </Grid>
                <Grid item xs={12} md={10} margin="100px">
                    {/* alters box size for screen sizes */}
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        Flag
                                    </TableCell>
                                    <TableCell>
                                        Feeling
                                    </TableCell>
                                    <TableCell>
                                        Comprehension
                                    </TableCell>
                                    <TableCell>
                                        Support
                                    </TableCell>
                                    <TableCell>
                                        Comments
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* iterates over the pieces of feedback */}
                                {this.state.feedback.map(fb => (
                                    <TableRow key={fb.id}>
                                        <TableCell>
                                            {fb.flagged ?
                                            <Icon onClick={this.handleFlagToggle(fb)}>
                                                flag
                                            </Icon> 
                                            :
                                            <Icon onClick={this.handleFlagToggle(fb)}>
                                                outlined_flag
                                            </Icon> 
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {fb.feeling}
                                        </TableCell>
                                        <TableCell>
                                            {fb.understanding}
                                        </TableCell>
                                        <TableCell>
                                            {fb.support}
                                        </TableCell>
                                        <TableCell>
                                            {fb.comments}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        )
    }
}

export default connect()(AdminTable);