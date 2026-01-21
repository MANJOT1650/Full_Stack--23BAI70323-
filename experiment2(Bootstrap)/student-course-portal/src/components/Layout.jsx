import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Floating Emojis Background */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    pointerEvents: 'none',
                    opacity: 0.15
                }}
            >
                {['🎓', '📚', '💻', '🚀', '💡', '🌟', '⚛️', '🧬', '🎨'].map((emoji, i) => (
                    <Box
                        key={i}
                        component="span"
                        sx={{
                            position: 'absolute',
                            fontSize: `${Math.random() * 4 + 2}rem`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 20}s linear infinite`,
                            '@keyframes float': {
                                '0%': { transform: 'translateY(100vh) rotate(0deg)' },
                                '100%': { transform: 'translateY(-100px) rotate(360deg)' },
                            }
                        }}
                    >
                        {emoji}
                    </Box>
                ))}
            </Box>

            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, position: 'relative', zIndex: 1 }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
