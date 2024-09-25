import "../../styles/MainPage.css";
import StatsBox from "../StatsBox/StatsBox";
import { Box } from '@mui/material';

const MainPage = () => {
    return (
        <div className="boxContent">
            <Box sx={{marginBottom:'5em'}}>
                <StatsBox />
            </Box>
        </div>
    );
}

export default MainPage;