import React from 'react'
import { Paper, Box } from '@mui/material';
import MyButton from '../UI/button/MyButton';
import { useState } from 'react';
import { REACT_APP_API } from '../../api/api';
import makeRequest from '../../helper/makeRequest';
import useInterval from '../../helper/useInterval';

const ControlModule = () => {
    const [startBtnText, setStartBtnText] = useState('Старт')
    const [sessionBtnText, setSessionBtnText] = useState('Завершить сессию')
    const [state, setState] = useState({ startFlag: false, sessionFlag: false })
    const [sessionBtnWidth, setSessionBtnWidth] = useState('0%')
    const [maxBtnWidth, setMaxBtnWidth] = useState('8em')
    const [maxBtnHeight, setMaxBtnHeight] = useState('3.5em')
    const [paperHeight, setPaperHeight] = useState('5em')
    const [butColor, setButColor] = useState('transparent')

    const toggleStart = () => {
        let newState = { ...state, startFlag: !state['startFlag'] }

        console.log(newState['startFlag'])

        if ((state['sessionFlag'] === false) && (newState['startFlag']))
        {
            // document.getElementById('sessionBtn').width = '100%'
            setSessionBtnWidth('25%');
            newState = { ...newState, sessionFlag: !state['sessionFlag'] };
            (newState['sessionFlag'] ? setSessionBtnText('Завершить сессию') : setSessionBtnText('Начать сессию'))
            setMaxBtnWidth('100em');
                setMaxBtnHeight('95%');
                setPaperHeight('10em');
                setButColor('rgba(214, 31, 31, 0.5)');

        }

        if ((state['sessionFlag'] === true) && (!newState['startFlag']))
            {
                // document.getElementById('sessionBtn').width = '100%'
                setMaxBtnWidth('8em');
                setMaxBtnHeight('3.5em');
                setSessionBtnWidth('100%');
                setButColor('transparent');
                setPaperHeight('5em');

            }
        if ((state['sessionFlag'] === true) && (newState['startFlag']))
            {
                // document.getElementById('sessionBtn').width = '100%'
                setMaxBtnWidth('100em');
                setMaxBtnHeight('95%');
                setButColor('rgba(214, 31, 31, 0.5)');
                setSessionBtnWidth('25%');
                setPaperHeight('10em');

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
            setMaxBtnWidth('8em');
            setMaxBtnHeight('3.5em');
            setPaperHeight('5em');
            setButColor('transparent');

        }

        setState(newState);
        (newState['sessionFlag'] ? setSessionBtnText('Завершить сессию') : setSessionBtnWidth('0%'))

        makeRequest('POST',
            REACT_APP_API + '/api/state',
            newState
        )
    }

    const fetchData = async () => {
        try {
            const responseState = await makeRequest("GET",
                REACT_APP_API + '/api/state')
            if (responseState) {
                if (state['startFlag'] !== responseState['startFlag']) {
                    (responseState['startFlag'] ? setStartBtnText('Стоп') : setStartBtnText('Старт'))
                }
                if (state['sessionFlag'] !== responseState['sessionFlag']) {
                    if (responseState['sessionFlag'] )
                    {
                        setMaxBtnWidth('100em');
                        setMaxBtnHeight('95%');
                        setButColor('rgba(214, 31, 31, 0.5)');
                        setSessionBtnWidth('25%');
                        setPaperHeight('10em');
                    }
                    else
                    {
                        setMaxBtnWidth('8em');
                        setMaxBtnHeight('3.5em');
                        setPaperHeight('5em');
                        setButColor('transparent');
                        setSessionBtnWidth('0%');
                    }
                        
                }
                setState(responseState)
            }
        }
        catch (error) {
            console.log('Fetching error')
        }
    }

    useInterval(() => {
        fetchData();
    }, 200)

    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height:paperHeight, transition:'height 0.6s ease-in-out' }} elevation={24}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                <MyButton id='startBtn' backgroundcolor={butColor} heightbtn={maxBtnHeight} maxwidthbtn={maxBtnWidth} transition='max-width 0.6s ease-in-out, height 0.6s ease-in-out, background-color 0.6s ease-in-out' onClick={toggleStart}> {startBtnText} </MyButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: sessionBtnWidth, opacity: sessionBtnWidth, height: '100%',
                transition: 'width 0.6s ease-in-out, opacity 0.6s ease-in-out'
            }}>
                {sessionBtnWidth === '0%' 
                ? 
                <MyButton heightbtn={maxBtnHeight} maxwidthbtn={maxBtnWidth} transition='max-width 0.6s ease-in-out, height 0.6s ease-in-out' disabled onClick={toggleSession}> { sessionBtnText } </MyButton>
                :
                <MyButton heightbtn={maxBtnHeight} maxwidthbtn={maxBtnWidth} transition='max-width 0.6s ease-in-out, height 0.6s ease-in-out' onClick={toggleSession}> { sessionBtnText } </MyButton>}
            </Box>
        </Box>
    </Paper>
}

export default ControlModule;