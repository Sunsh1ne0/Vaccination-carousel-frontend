import React from 'react'
import { Box, FormControl, Input } from '@mui/material';
import '../../styles/MainPage.css';
import MyLabel from '../UI/label/MyLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';

const SettingsOption = ({ title, options, handler, value, idx, input }) => {
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
                <FormControl size="small" sx={{ width: '70%', margin: 'auto', marginRight:'0.3em' }}>
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
                // <TextField
                //     endAdornment={<InputAdornment position="end">об/мин</InputAdornment>}
                //     // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                //     variant="standard"
                //     size="small"
                    // value={value}
                    // onChange={event => { handler(event.target.value, idx) }}
                //     fontSize='small'
                    // sx={{ margin: 'auto', width: '70%' }} />
                <Input
                id="standard-adornment-weight"
                endAdornment={<InputAdornment position="end" sx={{ fontSize: '1em' }}>об/мин</InputAdornment>}
                aria-describedby="standard-weight-helper-text"
                value={value}
                onChange={event => { handler(event.target.value, idx) }}
                sx={{ margin: 'auto', width: '70%', fontSize: '1em', marginRight:'0.3em' }}
              />

            }
        </Box>
    );
}

export default SettingsOption;