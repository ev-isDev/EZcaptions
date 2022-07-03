import React from 'react';
import '../App.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


const TablePage = props => {
    const data = {
        columns: [
            {
                label: 'start time',
                field: 'start_time',
                sort: 'asc'
            },
            {
                label: 'end time',
                field: 'end_time',
                sort: 'asc'
            },
            {
                label: 'caption text',
                field: 'caption_text',
                sort: 'asc'
            }
        ],
        rows: [
            {
                'start time': '00:00',
                'end time': '00:01',
                'caption text': 'example caption'
            }
        ]
    };
        return (
            <MDBTable scrollY>
                <MDBTableHead columns={data.columns} />
                <MDBTableBody rows={data.rows} />
            </MDBTable>
        );
};

export default TablePage;