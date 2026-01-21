import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import { useCourse } from '../context/CourseContext';

const CourseCard = ({ course, isEnrolledPage = false }) => {
    const { enrollCourse, deEnrollCourse, isEnrolled } = useCourse();

    const handleEnroll = () => {
        enrollCourse(course);
        alert(`Enrolled in ${course.name} successfully!`);
    };

    const handleDeEnroll = () => {
        deEnrollCourse(course.id);
        alert(`De-enrolled from ${course.name}.`);
    };

    const alreadyEnrolled = isEnrolled(course.id);

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={course.image}
                    alt={course.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Instructor: {course.instructor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Duration: {course.duration}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {course.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {isEnrolledPage ? (
                        <Button size="small" color="error" variant="contained" onClick={handleDeEnroll}>
                            De-enroll
                        </Button>
                    ) : (
                        <Button
                            size="small"
                            variant="contained"
                            onClick={handleEnroll}
                            disabled={alreadyEnrolled}
                        >
                            {alreadyEnrolled ? "Enrolled" : "Enroll Now"}
                        </Button>
                    )}
                    <Button size="small" color="primary">Learn More</Button>
                </CardActions>
            </Card>
        </motion.div>
    );
};

export default CourseCard;
