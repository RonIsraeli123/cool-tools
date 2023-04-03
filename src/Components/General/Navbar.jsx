import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { LOGO_TEXT, PAGES_TEXT } from '../../consts/general/Navbar'

import './General.css'

export const Navbar = () => {
    const navigate = useNavigate();
    const linkTo = (linkToText) => {
        if (linkToText === 'home') {
            navigate('/')
        }
        else { navigate(linkToText) }
    }

    return (
        <AppBar position="static" color='secondary'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {LOGO_TEXT}
                    </Typography>
                    <Box className='flexRow'>
                        {PAGES_TEXT.map((page_text, index) => (
                            <Button
                                key={index}
                                onClick={() => linkTo(page_text)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page_text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
