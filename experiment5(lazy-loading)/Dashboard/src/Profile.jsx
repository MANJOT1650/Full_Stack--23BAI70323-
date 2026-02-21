import React from 'react'

function Profile() {
    return (
        <div className="page profile">
            <h1>My Profile</h1>
            <div className="interview-intro">
                <h2>About Me</h2>
                <p>I am a passionate developer with a strong foundation in Full Stack technologies. I love building intuitive user interfaces and solving complex backend challenges.</p>

                <h2>Programming Skills</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>💻 <strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                    <li>⚙️ <strong>Backend:</strong> Node.js, Express</li>
                    <li>🗄️ <strong>Database:</strong> MongoDB, SQL</li>
                    <li>🔧 <strong>Tools:</strong> Git, GitHub, VS Code</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile
