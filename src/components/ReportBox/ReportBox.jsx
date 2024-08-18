import React, { useState } from 'react';
import dayjs from 'dayjs';
import makeRequest from '../../helper/makeRequest';
import { REACT_APP_API } from '../../api/api';
import useInterval from '../../helper/useInterval';
import { Box } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'startTime',
    headerName: 'Начало',
    width: 120,
    sortable: true,
  },
  {
    field: 'endTime',
    headerName: 'Конец',
    width: 110,
    sortable: true,
  },
  {
    field: 'dropsAmount',
    headerName: 'Кол-во сбросов',
    sortable: true,
    width: 145,
  },
  {
    field: 'rotationAmount',
    headerName: 'Кол-во оборотов',
    sortable: true,
    width: 155,
  },
  {
    field: 'vaccinationAmount1',
    headerName: 'Кол-во вакцинаций 1',
    sortable: true,
    width: 185,
  },
  {
    field: 'vaccinationAmount2',
    headerName: 'Кол-во вакцинаций 2',
    sortable: true,
    width: 185,
  },
  {
    field: 'status',
    headerName: 'Статус',
    sortable: true,
    width: 100,
  },
];

const ReportBox = ({reportDate}) => {
    const [reports, setReports] = useState([])

    const fetchData = async() => {
        try {
            const response = await makeRequest('POST', REACT_APP_API + '/api/report/', {date: dayjs(reportDate).format('YYYY-MM-DD')});
            console.log(response);
            response.map((resp) => {resp.startTime = dayjs(resp.startTime).format('HH:mm');
              resp.endTime = dayjs(resp.endTime).format('HH:mm');
              (resp.status === 'active' ? resp.status = "Активна" : resp.status = "Завершена");
              return response;
            })
            console.log(response);
            setReports(response);
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // useEffect(() => {
    //     fetchData();
    // }, [reportDate]);

    useInterval(() => {
      fetchData();
  }, 200);

    return <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={reports}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      // checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
        // {reports.map((report) => <ReportObject key={report.id} {...report} />)}
}
 
export default ReportBox;