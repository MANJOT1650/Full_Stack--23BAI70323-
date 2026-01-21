import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, Paper, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your feedback, ${name}!`);
        // Reset form
        setName('');
        setComments('');
        setRating(0);
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }} component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'white' }}>
                    Course Feedback
                </Typography>
                <Paper elevation={3} sx={{ p: 4, mt: 4, borderRadius: 2 }}>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Your Name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Box sx={{ my: 2 }}>
                            <Typography component="legend">Rate the Course Content</Typography>
                            <Rating
                                name="simple-controlled"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                                size="large"
                            />
                        </Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="comments"
                            label="Your Comments"
                            multiline
                            rows={4}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ mt: 3 }}
                        >
                            Submit Feedback
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

export default Feedback;
