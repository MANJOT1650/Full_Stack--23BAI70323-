import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton,
    Box, Menu, MenuItem, useMediaQuery, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useColorMode } from '../context/ThemeContext';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { mode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (path) => {
        navigate(path);
        handleClose();
    };

    const menuItems = [
        { label: 'Protal', path: '/' }, // Added link for Logo/Home if needed, but typograhpy acts as home usually
        { label: 'Home', path: '/' },
        { label: 'View Courses', path: '/courses' },
        { label: 'Enrolled Courses', path: '/enrolled' },
        { label: 'Feedback', path: '/feedback' },
        { label: 'Login', path: '/login' },
        { label: 'Register', path: '/register' },
    ];

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background: (theme) => theme.palette.mode === 'light'
                    ? 'rgba(255, 255, 255, 0.8)'
                    : 'rgba(30, 41, 59, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid',
                borderColor: 'divider'
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
                    onClick={() => navigate('/')}
                >
                    University Portal
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton onClick={toggleColorMode} color="inherit">
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {menuItems.slice(1).map((item) => (
                                <MenuItem key={item.label} onClick={() => handleNavigate(item.path)}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {menuItems.slice(1).map((item) => (
                            <Button
                                key={item.label}
                                color="inherit"
                                component={RouterLink}
                                to={item.path}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <IconButton onClick={toggleColorMode} color="inherit">
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
