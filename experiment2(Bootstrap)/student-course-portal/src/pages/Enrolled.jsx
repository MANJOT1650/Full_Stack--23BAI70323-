import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { useCourse } from '../context/CourseContext';
import CourseCard from '../components/CourseCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Enrolled = () => {
    const { enrolledCourses } = useCourse();
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    align="center"
                    sx={{ fontWeight: 'bold', color: 'white' }}
                >
                    My Enrolled Courses
                </Typography>
            </Box>

            {enrolledCourses.length === 0 ? (
                <Box sx={{ textAlign: 'center', mt: 8 }}>
                    <Typography variant="h6" color="white" gutterBottom>
                        You haven't enrolled in any courses yet.
                    </Typography>
                    <Button variant="contained" onClick={() => navigate('/courses')}>
                        Browse Courses
                    </Button>
                </Box>
            ) : (
                <Grid container spacing={4}>
                    <AnimatePresence>
                        {enrolledCourses.map((course) => (
                            <Grid
                                item
                                key={course.id}
                                xs={12}
                                sm={6}
                                md={4}
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                layout
                            >
                                <CourseCard course={course} isEnrolledPage={true} />
                            </Grid>
                        ))}
                    </AnimatePresence>
                </Grid>
            )}
        </Container>
    );
};

export default Enrolled;
