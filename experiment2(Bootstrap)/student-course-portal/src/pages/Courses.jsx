import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { useCourse } from '../context/CourseContext';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';

const Courses = () => {
    const { courses } = useCourse();

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        color: (theme) => theme.palette.mode === 'light' ? '#fff' : '#fff', // Force white if background is dark gradient
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Available Courses
                </Typography>
                <Typography variant="body1" align="center" paragraph sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', mx: 'auto' }}>
                    Explore our wide range of courses and start your learning journey today.
                </Typography>
            </Box>
            <Grid container spacing={4} alignItems="stretch" justifyContent="center">
                {courses.map((course, index) => (
                    <Grid
                        item
                        key={course.id}
                        xs={12}
                        sm={6}
                        md={4}
                        component={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        sx={{ display: 'flex' }}
                    >
                        <CourseCard course={course} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Courses;
