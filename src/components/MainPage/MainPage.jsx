import "../../styles/MainPage.css";
import StatsBox from "../StatsBox/StatsBox";
import { Box } from '@mui/material';

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