import React from 'react';

const Contact = () => {
    return (
        <div className="page-content contact-page">
            <h1>Contact Us</h1>
            <p>Get in touch with us for more information.</p>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
