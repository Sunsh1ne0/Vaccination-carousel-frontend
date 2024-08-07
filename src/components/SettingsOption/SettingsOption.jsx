import React from 'react'
import { Box, FormControl, Input, Slider } from '@mui/material';
import '../../styles/MainPage.css';
import MyLabel from '../UI/label/MyLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';

const SettingsOption = ({ title, options, handler, value, idx, input }) => {
    const marks = [
        {
            value: 1.8,
            label: '1.8',
        },
        {
            value: 5.0,
            label: '5.0',
        },
    ];
    return (
        <Box
            className="oneLineStat"
            sx={{
                display: 'flex',
                alignItems: 'space-between',
            }}>

            <MyLabel
                sx={{ width: '40%' }}> {title} </MyLabel>
            {input === 'SelectInput' ?
                <FormControl size="small" sx={{ width: '70%', margin: 'auto', marginRight: '0.3em' }}>
                    {/* <InputLabel sx={{ fontSize:'1em', height:'50px'}}>{title}</InputLabel> */}
                    <Select
                        // displayEmpty
                        variant='filled'
                        value={value}
                        label={title}
                        onChange={event => { handler(event.target.value, idx) }}
                        sx={{ fontSize: '1em' }}

                    >
                        {options.map((option) => (
                            <MenuItem key={option} value={option} sx={{ fontSize: '1em' }}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                :
                (input === 'TextInput'
                    ?
                    <Input
                        id="standard-adornment-weight"
                        endAdornment={<InputAdornment position="end" sx={{ fontSize: '1em' }}>об/мин</InputAdornment>}
                        aria-describedby="standard-weight-helper-text"
                        value={value}
                        onChange={event => { handler(event.target.value, idx) }}
                        sx={{ margin: 'auto', width: '70%', fontSize: '1em', marginRight: '0.3em' }}
                    /> :
                    <Slider
                        size='small'
                        aria-label="Speed"
                        defaultValue={2.0}
                        getAriaValueText={() => { return value; }}
                        onChange={event => { handler(event.target.value, idx) }}
                        valueLabelDisplay="on"
                        shiftStep={0.1}
                        step={0.1}
                        min={1.8}
                        max={5.0}
                        marks={marks}
                        sx={{ margin: 'auto', width: '70%', fontSize: '1em', marginRight: '1em' }}
                    />
                )

            }
        </Box>
    );
}

export default SettingsOption;