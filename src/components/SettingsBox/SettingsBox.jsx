import React from 'react'
import { Box, Typography } from '@mui/material';
import '../../styles/MainPage.css';
import { useState } from "react";
import SettingsOption from '../SettingsOption/SettingsOption';
import { useEffect } from 'react';
import MyButton from '../UI/button/MyButton';
import makeRequest from '../../helper/makeRequest';
import { REACT_APP_API } from '../../api/api';

const SettingsBox = () => {
    const dir = 'По часовой';
    const posFirst = 2;
    const posSec = 2;
    const rotSpeed = 0;
    const pusher = 'Без сброса';

    const [settings, setSettings] = useState([
        { id: 0, title: 'Направление вращения', options: ['По часовой', 'Против часовой'], nameSet: 'rotDir', value: dir, input: 'SelectInput' },
        { id: 1, title: 'Позиция вакцинатора 1', options: [2, 3, 4, 5, 6, 7, 8, 9], nameSet: 'vacPos1', value: posFirst, input: 'SelectInput' },
        { id: 2, title: 'Позиция вакцинатора 2', options: [2, 3, 4, 5, 6, 7, 8, 9], nameSet: 'vacPos2', value: posSec, input: 'SelectInput' },
        { id: 3, title: 'Толкатель', options: ['Без сброса', 'Сброс всех', 'Одна вакцина', 'Две вакцины'], nameSet: 'pusher', value: pusher, input: 'SelectInput' },
        { id: 4, title: 'Скорость вращения', options: [], nameSet: 'targetSpeed', value: rotSpeed, input: 'TextInput' },
    ])

    const updateSettings = () => {
        try {
            let respCopy = {}

            settings.map((setting, index) => (
                respCopy[setting['nameSet']] = ((setting['value'] === '' ? 0 : setting['value']))
            )
            )


            console.log(respCopy);

            // fetch("http://localhost:8000/settings_update", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(respCopy)
            // })
            makeRequest('POST',
                REACT_APP_API + '/api/settings_update',
                respCopy
            )
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
        fetchData()

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
                {settings.map((setting, index) => <SettingsOption title={setting.title} options={setting.options} key={setting.id} handler={handleChange} value={setting.value} idx={setting.id} input={setting.input} />)}
            </Box>
            <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex', height: '4em' }}>
                <MyButton onClick={updateSettings}>
                    Сохранить
                </MyButton>
            </Box>

        </div>
    );
}

export default SettingsBox;