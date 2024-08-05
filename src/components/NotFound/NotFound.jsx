import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const goMainPage = () => {
    setTimeout(() => navigate('/'), 3000);
  };

  goMainPage();

  const TypographyNotFound = styled(Typography)({
    fontSize: '40px',
    fontWeight: 'bolder',
    color: '#cc0000',
  });

  return (
    <Box textAlign='center' marginTop='30px'>
      <h1>
        <Typography variant='h3' gutterBottom>
          🐔
        </Typography>
        <br />
        <TypographyNotFound>Sorry</TypographyNotFound>
        <TypographyNotFound variant='h4' gutterBottom>
          such a page does not exist
        </TypographyNotFound>
      </h1>
    </Box>
  );
};