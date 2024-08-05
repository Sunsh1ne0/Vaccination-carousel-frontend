import React from 'react'
import {
    Box, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Drawer
} from '@mui/material';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";


const DrawerMenu = ({ toggleDrawer, open }) => {
    const navigate = useNavigate();

    function gotoSettings() {
        navigate("/settings")
    }
    function gotoStats() {
        navigate("/")
    }
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Статистика', 'Настройки'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={index % 2 === 0 ? gotoStats : gotoSettings}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <StackedLineChartIcon /> : <SettingsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
}

export default DrawerMenu;