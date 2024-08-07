import "../../styles/MainPage.css";
import StatsBox from "../StatsBox/StatsBox";
import { Box } from '@mui/material';

import ControlModule from "../ControlModule/ContolModule";

const MainPage = () => {
    return (
        <div className="boxContent">
            <Box sx={{marginBottom:'5em'}}>
                <StatsBox />
                <ControlModule />
            </Box>
        </div>
    );
}

export default MainPage;