import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class AdminTable extends Component {
    constructor() {
        super();
        this.state = {
            feedback: [],
        };
        axios.get('/api/feedback')
            .then(response => {
                this.setState({
                    feedback: response.data,
                });
            }).catch(error => console.log('whoops'));
    }

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