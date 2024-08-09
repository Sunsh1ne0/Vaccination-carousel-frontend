import React from 'react'
import { Paper, Box } from '@mui/material';
import MyButton from '../UI/button/MyButton';
import { useState, useEffect } from 'react';
import { REACT_APP_API } from '../../api/api';
import makeRequest from '../../helper/makeRequest';
import useInterval from '../../helper/useInterval';

const ControlModule = () => {
    const [startBtnText, setStartBtnText] = useState('Старт')
    const [sessionBtnText, setSessionBtnText] = useState('Начать сессию')
    const [state, setState] = useState({ startFlag: false, sessionFlag: false })

    const toggleStart = () => {
        let newState = { ...state, startFlag: !state['startFlag'] }

        console.log(newState['startFlag'])

        if ((state['sessionFlag'] === false) && (newState['startFlag']))
        {
            newState = { ...newState, sessionFlag: !state['sessionFlag'] };
            (newState['sessionFlag'] ? setSessionBtnText('Завершить сессию') : setSessionBtnText('Начать сессию'))


        }

        setState(newState);
        (newState['startFlag'] ? setStartBtnText('Стоп') : setStartBtnText('Старт'))

        makeRequest('POST',
            REACT_APP_API + '/api/state',
            newState
        )
    }

    const toggleSession = () => {
        const newState = { ...state, sessionFlag: !state['sessionFlag'] }

        if (state['startFlag'] && !newState['sessionFlag']) {
            newState['startFlag'] = !newState['startFlag'];
            (newState['startFlag'] ? setStartBtnText('Стоп') : setStartBtnText('Старт'))
        }

        setState(newState);
        (newState['sessionFlag'] ? setSessionBtnText('Завершить сессию') : setSessionBtnText('Начать сессию'))

        makeRequest('POST',
            REACT_APP_API + '/api/state',
            newState
        )
    }

    const fetchData = async () => {
        try {
            const responseState = await makeRequest("GET",
                REACT_APP_API + '/api/state')
            // console.log('Fetching') 
            if (responseState) {
                if (state['startFlag'] !== responseState['startFlag']) {
                    (responseState['startFlag'] ? setStartBtnText('Стоп') : setStartBtnText('Старт'))
                }
                if (state['sessionFlag'] !== responseState['sessionFlag']) {
                    (responseState['sessionFlag'] ? setSessionBtnText('Завершить сессию') : setSessionBtnText('Начать сессию'))
                }
                setState(responseState)
                // console.log(state) 
            }
        }
        catch (error) {
            // console.log('Fetching error')

        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    useInterval(() => {
        fetchData()
    }, 200)

    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '5em' }} elevation={24}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                <MyButton id='startBtn' onClick={toggleStart}> {startBtnText} </MyButton>
            </Box>
            <Box sx={{ display: (state['sessionFlag'] ? 'flex' : 'none'), justifyContent: 'center', width: '100%', height: '100%' }}>
                <MyButton height='10px !important' onClick={toggleSession}> { sessionBtnText } </MyButton>
            </Box>
        </Box>
    </Paper>
}

export default ControlModule;