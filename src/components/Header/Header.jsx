import {
  Box, Divider, Stack, Typography,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Clock from '../Clock/Clock';
import Logo_Agrobit from '../../assets/icons/Logo_Agrobit.png';
import { DateComponent } from '../DateComponent/DateComponent';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import '../../styles/Header.css';
import React from 'react'

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      className="headerBox"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#e0e0e0',
        boxShadow: '0 5px 5px -5px',
        borderTopLeftRadius: '40px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '40px',
        borderTopRightRadius: '10px',
        height: '60px',

      }}
    >
      <Box sx={{
        margin: 'auto', padding: '0', display: 'flex',
        width: '100%',
      }}>
        <Box sx={{ margin:'auto', marginLeft: '1em', }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            sx={{
              mr: 2, ...(open && { display: 'none' }),
              margin: 'auto', padding: 'auto'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box sx={{ margin: 'auto', marginRight:'1em' }}>
          <img src={Logo_Agrobit} alt=''/>
        </Box>
      </Box>
      <Stack
        className="infoBox"

        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            background: '#2aeb5e',
            borderTopLeftRadius: '40px',
            borderBottomRightRadius: '40px',
            borderBottomLeftRadius: '10px',
            borderTopRightRadius: '10px',
            gap: '30px',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'space-around',
            boxShadow: '5px 0 5px -5px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box
              className="dateBox"
              sx={{ paddingLeft: '10px' }}>
              <Typography
                sx={{ fontSize: '32px' }}
              >
                <DateComponent />
              </Typography>
            </Box>

            <Divider
              className="divider"
              orientation="vertical"
              variant="middle"
              sx={{
                width: '2px',
                opacity: '1',
                height: '30px',
                margin: '0 19px ',
              }}
              color="#181818"
            />
            <Box
              className="clockBox">
              <Typography
                sx={{ fontSize: '32px' }}
              >
                <Clock />
              </Typography>
            </Box>

            <Divider
              className="divider"
              orientation="vertical"
              variant="middle"
              sx={{
                width: '2px',
                opacity: '1',
                height: '30px',
                margin: '0 0 0 19px',
              }}
              color="#181818"
            />
            <Typography
              className="headerTitle"

              sx={{
                fontSize: '32px',
                textTransform: 'capitalize',
                marginLeft: '19px',
                marginRight: '30px',
              }}
              onClick={() => window.location.reload(false)}
            >
              Автовакцинатор
            </Typography>
          </Box>
        </Box>
      </Stack>

      <DrawerMenu toggleDrawer={toggleDrawer} open={open} />

      
    </Box>
  );
}