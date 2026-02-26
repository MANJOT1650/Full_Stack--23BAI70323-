import React, { useState } from 'react';

const SimpleForm = () => {
    // 1. Initialize state for form fields (Controlled Components)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    // 2. Handle input change events
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // 3. Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submit Data:', formData);
        alert(`Form Submitted!\nName: ${formData.username}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    };

    return (
        <div className="simple-form-container">
            <h2>Basic Controlled Form</h2>
            <form onSubmit={handleSubmit} className="basic-form">
                <div className="input-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="input-group">
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                    />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            <div className="preview-box">
                <h3>Live State Preview</h3>
                <p><strong>Name:</strong> {formData.username}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Message:</strong> {formData.message}</p>
            </div>
        </div>
    );
};

export default SimpleForm;
