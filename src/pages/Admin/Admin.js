import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AdminTable from '../../components/AdminTable/AdminTable';

class Admin extends Component {

    render() {
        return (
            <div>
                <AdminHeader />
                <AdminTable />
            </div>
        );
    }
}

export default connect()(Admin);