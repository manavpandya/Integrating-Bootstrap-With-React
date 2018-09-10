import React, { Component } from 'react';
import { Table } from 'reactstrap';

class ReactTable extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Manav Pandya</td>
                        <td>Information Technology</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>C#Corner</td>
                        <td>Management</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default ReactTable;
