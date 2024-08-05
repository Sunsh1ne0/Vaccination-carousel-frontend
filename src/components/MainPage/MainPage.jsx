import { useState } from "react";
import "../../styles/MainPage.css";
import StatsBox from "../StatsBox/StatsBox";
import { Box } from '@mui/material';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';

import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SettingsIcon from '@mui/icons-material/Settings';

import MyButton from '../UI/button/MyButton';
import ControlModule from "../ControlModule/ContolModule";

const MainPage = () => {
    return (
        <div>
            <div className="boxContent">
                <Box>
                    <StatsBox />
                    <ControlModule />
                </Box>
            </div>

        </div>
    );
}

export default MainPage;