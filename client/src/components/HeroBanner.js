import React from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Link, useLocation } from "react-router-dom";
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';
import Wheels from '../assets/images/wheels.jpg'

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '10px', xs: '70px' },
        ml: { sm: '50px' },
        display: 'flex',
        alignItems: 'center',
        flexDirection: { lg: 'row', xs: 'column' },
      }}
      position="relative"
      p="20px"
    >
      <Box flex="1">
        <img
          src={HeroBannerImage}
          alt="banner"
          className="img-fluid"
          style={{ maxWidth: '100%','borderRadius':'10px' }}
        />
      </Box>
      <Box flex="1">
        
        <Typography fontWeight={700} sx={{ fontSize: { lg: '40px', xs: '32px' } }}>
          Come! Lets achieve <br /> all of our <br /> fitness and driving dreams.
        </Typography>
        <Button variant="dark" component={Link} to="../pages/features" style={{'fontSize':'20px'}}>
          What we offer &nbsp; &nbsp; <ArrowRightCircle size={35} />
        </Button>
      </Box>
      <Box flex="1">
        <img
          src={Wheels}
          alt="banner"
          className="img-fluid"
          style={{ maxWidth: '100%','borderRadius':'10px' }}
        />
      </Box>
      
    </Box>
  );
};

export default HeroBanner;
