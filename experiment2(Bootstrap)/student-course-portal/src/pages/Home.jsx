import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Hero Section */}
            <Box
                sx={{
                    py: 10,
                    textAlign: 'center',
                    background: (theme) => theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                        : 'linear-gradient(135deg, #1e1e2f 0%, #2a2a40 100%)',
                    borderRadius: 4,
                    mb: 6,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 6
                }}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle, rgba(98,0,234,0.1) 0%, rgba(0,0,0,0) 70%)',
                        animation: 'rotate 20s linear infinite',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />
                <style>
                    {`@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
                </style>
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: '800' }}>
                        Welcome to Future University
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                        Empowering students with world-class education and modern learning resources. Join us to shape your future.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/courses')}
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{ fontSize: '1.2rem', px: 5, py: 1.5 }}
                    >
                        Explore Courses
                    </Button>
                </Container>
            </Box>

            {/* Highlights Section */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                {[
                    { title: "Academic Excellence", desc: "Top-tier programs designed by industry experts." },
                    { title: "Modern Learning", desc: "Interactive and digital-first approach to education." },
                    { title: "Career Growth", desc: "Strong placement support and global opportunities." },
                    { title: "Global Opportunities", desc: "Global opportunities for internships and placements." }
                ].map((item, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper
                            sx={{ p: 3, height: '100%', textAlign: 'center' }}
                            elevation={3}
                            component={motion.div}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Typography variant="h5" gutterBottom sx={{ color: 'secondary.main', fontWeight: 'bold' }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body1">
                                {item.desc}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* Stats Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 8,
                    p: 4,
                    background: (theme) => theme.palette.mode === 'light' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4
                }}
            >
                <Grid container spacing={4}>
                    {[
                        { count: "10k+", label: "Active Students" },
                        { count: "50+", label: "Certified Courses" },
                        { count: "100+", label: "Expert Instructors" },
                        { count: "95%", label: "Placement Rate" }
                    ].map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                                {stat.count}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                {stat.label}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Testimonials Section */}
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                What Our Students Say
            </Typography>
            <Grid container spacing={4} sx={{ mb: 4 }}>
                {[
                    { name: "Sanya Gupta", role: "Computer Science Student", text: "The curriculum is updated with the latest technologies. Truly amazing learning experience!" },
                    { name: "Rahul Sharma", role: "Web Development Alumnus", text: "Hands-on projects and expert guidance helped me crack my dream job interview." },
                    { name: "Amit Verma", role: "Data Science Learner", text: "The flexibility of online learning combined with rigorous content is perfect for professionals." }
                ].map((testimonial, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper
                            sx={{
                                p: 3,
                                height: '100%',
                                borderRadius: 4,
                                background: (theme) => theme.palette.background.paper
                            }}
                            elevation={2}
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Typography variant="body1" paragraph fontStyle="italic">
                                "{testimonial.text}"
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                <Box
                                    sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(45deg, #6200ea, #ec407a)',
                                        mr: 2
                                    }}
                                />
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold">
                                        {testimonial.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {testimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Home;
