import React, { useState } from 'react';

const ControlledForm = () => {
    // Initializing state for form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        bio: '',
        gender: '', // Fixed: no default selection
        subscribe: false
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false); // State for visibility toggle

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|[a-z]{2,})$/i;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const hasCapital = /^[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const hasMinLength = password.length >= 5;

        return {
            isValid: hasCapital && hasNumber && hasSpecial && hasMinLength,
            details: { hasCapital, hasNumber, hasSpecial, hasMinLength }
        };
    };

    // Handle input change events
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        // Email Validation
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format (must include @ and .com, .in, or country code)';
        }

        // Password Validation
        const passwordStatus = validatePassword(formData.password);
        if (!passwordStatus.isValid) {
            let msg = 'Password must: ';
            if (!passwordStatus.details.hasCapital) msg += 'start with a capital letter, ';
            if (!passwordStatus.details.hasNumber) msg += 'include a number, ';
            if (!passwordStatus.details.hasSpecial) msg += 'include a special character, ';
            if (!passwordStatus.details.hasMinLength) msg += 'be at least 5 characters long, ';
            newErrors.password = msg.replace(/, $/, '');
        }

        // Gender Validation
        if (!formData.gender) {
            newErrors.gender = 'Please select a gender';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Form Submitted:', formData);
        alert(`Details Submitted Successfully!\nName: ${formData.username}\nEmail: ${formData.email}`);
    };

    return (
        <div className="main-content">
            <div className="form-container">
                <h2>Account Information</h2>
                <form onSubmit={handleSubmit} className="styled-form">
                    <div className="form-group">
                        <label htmlFor="username">Full Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={errors.email ? 'error-input' : ''}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Security Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                className={errors.password ? 'error-input' : ''}
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="bio">Professional Summary</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            placeholder="Brief description for your profile..."
                            rows="3"
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                /> Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                /> Female
                            </label>
                        </div>
                        {errors.gender && <span className="error-text">{errors.gender}</span>}
                    </div>

                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="subscribe"
                                checked={formData.subscribe}
                                onChange={handleChange}
                            /> I agree to the terms and newsletter updates
                        </label>
                    </div>

                    <button type="submit" className="submit-btn">Create Account</button>
                </form>
            </div>

            <aside className="live-preview">
                <h3>Data Sync Explorer</h3>
                <div className="preview-grid">
                    <div className="preview-item">
                        <span className="preview-label">Full Name</span>
                        <span className="preview-value">{formData.username || '—'}</span>
                    </div>
                    <div className="preview-item">
                        <span className="preview-label">Email Address</span>
                        <span className="preview-value">{formData.email || '—'}</span>
                    </div>
                    <div className="preview-item">
                        <span className="preview-label">Gender</span>
                        <span className="preview-value text-capitalize">{formData.gender || 'Not Selected'}</span>
                    </div>
                    <div className="preview-item">
                        <span className="preview-label">Newsletter</span>
                        <span className="preview-value">{formData.subscribe ? 'Subscribed' : 'Not Subscribed'}</span>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default ControlledForm;
