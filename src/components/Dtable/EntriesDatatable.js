import React, { useEffect } from 'react'
import axios from "axios";

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import {config} from "../../config"



function EntriesDataTable() {
    var trans_table = [];

    useEffect(() => {
        trans_table = $('#trans_table').DataTable({
            "language": { "infoFiltered": "" },
            "processing": true, //Feature control the processing indicator.
            "serverSide": true, //Feature control DataTables' server-side processing mode.
            "responsive": true,
            "order": [[0, 'desc']], //Initial no order.
            "createdRow": function (row, data, dataIndex) {
            },
            "columns": [
                {
                    "data": "trans_id", "render": function (data, type, row, meta) {
                        return `TRANS-${row.trans_id}`
                    }
                },
                // { "data": "trans_id" },
                { "data": "received_from" },
                { "data": "trans_type" },
                { "data": "mb_file_no" },
                { "data": "plate_no" },
                {
                    "data": "published_status", "render": function (data, type, row, meta) {
                        return row.published_status == 1 ? "Approved" : "Pending";
                    }
                },
                { "data": "date_issued" },
                {
                    "data": "trans_id", "render": function (data, type, row, meta) {
                        var btns = `
                            <div class="action_btns"><a class="btn_view" data-id="${row.trans_id}" href="#"><i class="fa fa-eye"></i> View</a>  <a data-id="${row.trans_id}" class="btn_edit" href="#"><i class="fa fa-pencil"></i> Edit</a> <a class="btn_delete" data-id="${row.trans_id}" href="#"><i class="fa fa-trash"></i> Delete</a></div>
                        `
                        return btns
                    }
                },
            ],
            "ajax": {
                "url": config.api_url + "api_agent/get_transaction_data",
                "type": "POST"
            },
            "columnDefs": [
                {
                    "targets": [7],
                    "orderable": false,
                },
            ]
        });
        
        return () => {
            trans_table.destroy();
        }

    }, [])

    return (
        <div>
            <table data-tbl='datatable' id="trans_table" className="display dtable" >
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Received From</th>
                        <th>Transaction Type</th>
                        <th>MV File No.</th>
                        <th>Plate No.</th>
                        <th>Status</th>
                        <th>Date Issued</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default EntriesDataTable
