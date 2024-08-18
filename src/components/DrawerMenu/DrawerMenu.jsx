import React from 'react'
import {
    Box, List, ListItem, ListItemButton,
    ListItemIcon, ListItemText, Drawer
} from '@mui/material';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import SummarizeIcon from '@mui/icons-material/Summarize';


const DrawerMenu = ({ toggleDrawer, open }) => {
    const navigate = useNavigate();

    function gotoSettings() {
        navigate("/settings")
    }
    function gotoStats() {
        navigate("/")
    }
    function gotoReport() {
        navigate("/report")
    }
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Статистика', 'Настройки', 'Отчет'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={index === 0 ? gotoStats : (index === 1 ? gotoSettings : gotoReport)}>
                            <ListItemIcon>
                                {index === 0 ? <StackedLineChartIcon /> : (index === 1 ? <SettingsIcon /> : <SummarizeIcon /> )}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Drawer transitionDuration={600} open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
}

export default DrawerMenu;