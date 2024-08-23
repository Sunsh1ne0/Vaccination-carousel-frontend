import React from 'react'
import { Box, Typography, Alert } from '@mui/material';
import '../../styles/MainPage.css';
import { useState } from "react";
import SettingsOption from '../SettingsOption/SettingsOption';
import { useEffect } from 'react';
import MyButton from '../UI/button/MyButton';
import makeRequest from '../../helper/makeRequest';
import { REACT_APP_API } from '../../api/api';

const SettingsBox = () => {
    const dir = 'По часовой';
    const posFirst = 1;
    const posSec = 1;
    const rotSpeed = 0;
    const pusher = 'Сброс всех';
    const control = 'Включен';

    const [settings, setSettings] = useState([
        { id: 0, title: 'Направление вращения', options: ['По часовой', 'Против часовой'], nameSet: 'rotDir', value: dir, input: 'SelectInput' },
        { id: 1, title: 'Контроль вакцинации', options: ['Включен', 'Выключен'], nameSet: 'control', value: control, input: 'SelectInput' },
        { id: 2, title: 'Толкатель', options: ['Сброс всех', 'Одна вакцина', 'Две вакцины'], nameSet: 'pusher', value: pusher, input: 'SelectInput' },
        { id: 3, title: 'Позиция вакцинатора 1', options: [1, 2, 3, 4, 5, 6, 7, 8], nameSet: 'vacPos1', value: posFirst, input: 'SelectInput' },
        { id: 4, title: 'Позиция вакцинатора 2', options: [1, 2, 3, 4, 5, 6, 7, 8], nameSet: 'vacPos2', value: posSec, input: 'SelectInput' },
        { id: 5, title: 'Скорость вращения', options: [], nameSet: 'targetSpeed', value: rotSpeed, input: 'SliderInput' },
    ])

    const [dispError, SetDispError] = useState('none')
    const [dispSuccess, SetDispSuccess] = useState('none')

    const hideAlert = () => {
        SetDispError('none')
        SetDispSuccess('none')
    }

    const updateSettings = () => {
        try {
            let respCopy = {}

            settings.map((setting, index) => (
                respCopy[setting['nameSet']] = ((setting['value'] === '' ? 0 : setting['value']))
            )
            )

            if (settings[3]['value'] === settings[4]['value']) {
                SetDispError('flex')
                setTimeout(hideAlert, 3000)
            }
            else{
                SetDispSuccess('flex')
                setTimeout(hideAlert, 3000)
                makeRequest('POST',
                    REACT_APP_API + '/api/settings_update',
                    respCopy
                )
            } 
        }
        catch (error) {
            console.log('Error:', error);
        }
    }

    const handleChange = (valueNew, idx) => {
        let copySet = [];
        settings.map((setting, index) => copySet.push((index === idx) ? { ...setting, value: valueNew } : setting))
        setSettings(copySet)
    };

    const fetchData = async () => {
        try {
            const response = await makeRequest('GET', REACT_APP_API + '/api/settings_update')
            // fetch("http://localhost:8000/settings_update", requestOptions)
            console.log(response)
            if (response) {
                setSettings(response)
            }
        }
        catch (error) {
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="settingsBox">
            
            <Typography
                className='boxTitle'
                gutterBottom
                textAlign={"left"}>
                Настройки
            </Typography>
            <Box className='boxInner'>
                { 
                    settings.map((setting, index) => ((index === 2) || (index === 3) || (index === 4)) && (settings[1]['value'] === 'Выключен') ?  <Box sx={{display: 'none'}} key={setting.id}/> : <SettingsOption title={setting.title} options={setting.options} key={setting.id} handler={handleChange} value={setting.value} idx={setting.id} input={setting.input} />)
                }
            </Box>

            <Alert severity="error" sx={{display:dispError}}>Позиции вакцинаторов не должны совпадать!</Alert>
            <Alert severity="success" sx={{display:dispSuccess}}>Настройки сохранены!</Alert>

            <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex', height: '4em' }}>
                <MyButton onClick={updateSettings}>
                    Сохранить
                </MyButton>
            </Box>
        </div>
    );
}

export default SettingsBox;