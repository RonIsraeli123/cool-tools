import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { LOGO_TEXT, PAGES_TEXT } from '../../consts/general/Navbar'

export const Navbar = (props) => {
    const changePath = (to) => {
        const path = props.homePath + `${to}`;
        window.location = path;
    }

    return (
        <AppBar position="static">
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
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {PAGES_TEXT.map((page_text, index) => (
                            <Button
                                onClick={() => { changePath(page_text) }}
                                key={index}
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
