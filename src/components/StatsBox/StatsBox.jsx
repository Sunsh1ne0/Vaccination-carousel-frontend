import React from 'react'
import InformationLine from "../InformationLine/InformationLine";
import { Box, Typography } from '@mui/material';
import '../../styles/StatsBox.css';
import '../../styles/MainPage.css';
import { useState } from 'react';
import makeRequest from '../../helper/makeRequest';
import { REACT_APP_API } from '../../api/api';

import useInterval from '../../helper/useInterval';

const StatsBox = () => {
    const [stats, setStats] = useState([
        { id: 0, title: 'Целевая скорость', value: 0 },
        { id: 1, title: 'Текущая скорость', value: 0 },
        { id: 2, title: 'Количество оборотов', value: 0 },
        { id: 3, title: 'Количество сбросов', value: 0 },
        { id: 4, title: 'Количество вакцинаций 1', value: 0 },
        { id: 5, title: 'Количество вакцинаций 2', value: 0 },
    ])

    const fetchData = async () => {
        try {
            const responseStats = await makeRequest("GET",
                REACT_APP_API + '/api/stats')
            if (responseStats) {
                setStats(responseStats)
            }
        }
        catch (error) {
            console.error('Fetching error: ' + error)
        }
    }

    useInterval(() => {
        fetchData();
    }, 200);

    return (
        <div className='statsBox'>
            <Typography
                className='boxTitle'
                gutterBottom
                textAlign={"left"}>
                Статистика
            </Typography>
            <Box className='boxInner'>
                {stats.map((stat) => <InformationLine title={stat.title} value={stat.value} key={stat.id} />)}
            </Box>

        </div>
    );
}

export default StatsBox;